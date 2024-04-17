import { useState,useCallback } from "react"
import Image from '../components/Image';

export default function NewCourse(){
const [image,setimage] = useState();
const [title,setTitle] = useState();
const [desc,setdesc] = useState();
const [imagefile,setimagefile] = useState();


async function senddata(){
    const formdata = new FormData();
    formdata.append('image',imagefile);
    formdata.append('title',title);
    formdata.append('description',desc);
    
    const response = await fetch('http://localhost:3000/admin/newcourse',{
        method:"POST",
        body:formdata
    })
    
    const data = await response.json();
    console.log(data);
    
}

    function saveimage(e){
        let input = e.target;
        setimagefile(input.files[0]);
        if(input.files && input.files[0]){
            let reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = function (e){
                setimage(e.target.result);
            }
        }
    }

    

    return (
        <div className="p-4 flex flex-col gap-4 ">
            <h2 className="font-medium text-2xl">Publish Course</h2>
            <input type="text" placeholder="Title of the course" onChange={(e)=>{
                setTitle(e.target.value);
            }}></input>
            <textarea type="text" placeholder="Description of the course" onChange={(e)=>{
                setdesc(e.target.value)
            }}></textarea>
            <label for="image" >Enter the image</label>
            <div className="flex gap-4">
                <input type="file" id="image" name="image" onChange={saveimage} accept="image/*"/>
                {
                    <Image src={image} alt={"course"}/>
                }
            </div>
            <button onClick={senddata}>Submit</button>
        </div>
    )
}