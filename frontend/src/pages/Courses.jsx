import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"
import {data} from '../utils/data';
import Button from '../components/Button';
import CourseItem from "../components/CourseItem";
import axios from 'axios';

export default function Courses(){
const[Courses,setcourses] = useState([]);

useEffect(()=>{
    async function tofetch(){
        const response = await axios.get('http://localhost:3001/user/courses')
        setcourses(response.data.courses);
    }
    tofetch()
},[])


const navigate = useNavigate();
    return (
        <div className="grid grid-cols-4 p-4 gap-3">
            {
                Courses.map((course)=>{
                    return <CourseItem key={course._id} title={course.title} price={course.price} description={course.description} image={course.image} label={'View Details'} onPress={(e)=>{
                        navigate("/Courses/"+course._id); 
                    }}/>
                })
            }
        </div>
    )
}

