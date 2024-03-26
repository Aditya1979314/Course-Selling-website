import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"
import {data} from '../utils/data';
import Button from '../components/Button';
import CourseItem from "../components/CourseItem";

export default function Courses(){
const[Courses,setcourses] = useState([]);

useEffect(()=>{
setcourses(data);
},[])

const navigate = useNavigate();
    return (
        <div className="grid grid-cols-4 p-4">
            {
                Courses.map((course)=>{
                    return <CourseItem key={course.id} title={course.title} price={course.price} description={course.description} image={course.image} onPress={(e)=>{
                        navigate("/Course?id="+course.id+"&description="+course.description); 
                    }}/>
                })
            }
        </div>
    )
}

