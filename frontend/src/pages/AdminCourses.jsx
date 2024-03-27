import { useEffect, useState } from "react"
import {data} from '../utils/data'
import CourseItem from "../components/CourseItem";
import { useNavigate } from "react-router-dom";

export default function AdminCourses(){
const[courses,setcourses] = useState([]);

useEffect(()=>{
    setcourses(data)
},[])

const navigate= useNavigate();

    return(
        <div className="grid grid-cols-3 p-4 w-4/6 gap-3">
            {courses.map((course)=>{
                return <CourseItem key={course.id} title={course.title} description={course.description} image={course.image} price={course.price} label={"Edit Details"} onPress={(e)=>{
                    navigate('/admin/EditCourse?id='+course.id);
                }}/>
            })}
        </div>
    )
}