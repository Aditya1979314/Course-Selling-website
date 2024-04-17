const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const dbconnect = require("./db");
const multer = require('multer');
const aws = require('aws-sdk');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const {User,Course} = require('./models/user');

const inputvalidate = require('./middlewares/inputvalidation');
const userauth = require('./middlewares/userauth')

const upload = multer();
const app = express();
app.use(express.json())
app.use(cors());

aws.config.update({
    accessKeyId:process.env.access_key,
    secretAccessKey:process.env.secret_key
})

const s3 = new aws.S3();

// admin routes

app.post('/admin/newcourse',upload.single('image'),async (req,res)=>{
    try{
        const {title,description} = req.body;
        const {originalname,buffer,mimetype} = req.file;

        const uploadparams = {
            Bucket:process.env.bucket,
            Key:originalname,
            Body:buffer,
            ContentType:mimetype
        }

        const uploadresult = await s3.upload(uploadparams).promise();

        await Course.create({
            title:title,
            description:description,
            image:uploadresult.Location
        })
        res.status(200).json({
            msg:"course data saved"
        })
    }catch(err){
        res.status(402).json({
            msg: err
        })
    }
})


app.get("/admin/course",async (req,res)=>{
try{
    const allcourse = await Course.find({});
    res.status(200).json({
        msg:allcourse
    })
}catch(err){
    res.status(402).json({
        msg:"not able to fetch course"
    })
}
})

// user routes

app.post('/user/signup',inputvalidate,async (req,res)=>{
    try{
        const user = await User.findOne({
            email:req.body.email,
            password:req.body.password
        })

        if(user){
            return res.status(404).json({
                msg:"user already exists"
            })
        }else{
            await User.create({
                email:req.body.email,
                password:req.body.password
            })
    
            return res.status(200).json({
                msg:"user successfully registered"
            })
        }

    }catch(err){
        res.status(404).json({
            msg:"user cannot be registered"
        })
    }

})

app.post('/user/login',inputvalidate,async (req,res)=>{
    try{
        const user = await User.findOne({
            email:req.body.email
        })

        if(user){
            const token = jwt.sign({id:user._id},process.env.jwt_secret);
            return res.status(200).json({
                data:token
            })
        }else{
            return res.status(404).json({
                msg:"user isn't signedUp"
            })
        }

    }catch(err){
        res.status(404).json({
            msg:"something went wrong"
        })
    }
})

app.get('/user/courses',async (req,res)=>{
    try{
        const courses = await Course.find({});
        return res.status(200).json({
            data:courses
        })
    }catch(err){
        res.status(404).json({
            msg:"some error occured"
        })
    }
})

app.get('/user/purchasedcourses',userauth,async (req,res)=>{
    try{
        const purchasedcourses = await User.findOne({_id:req.userid}).populate('courses').exec();
        return res.status(200).json({
            msg:purchasedcourses
        })
    }catch(err){
        return res.status(404).json({
            msg:"some error occured"
        })
    }
})

dbconnect();

app.listen(3000,()=>{
    console.log("server connnected");
})



