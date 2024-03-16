import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"
import {data} from '../utils/data';

export default function Courses(){
const[Courses,setcourses] = useState([]);

useEffect(()=>{
setcourses(data);
},[])

const navigate = useNavigate();
    return (
        <div>
            Courses page

            {
                Courses.map((course)=>{
                    return <CourseItem key={course.id} description={course.description} onPress={(e)=>{
                        navigate("/Course?id="+course.id+"&description="+course.description); 
                    }}/>
                })
            }
        </div>
    )
}


function CourseItem({id,description,onPress}){
return (
    <div>
        <div>
        {description}
        </div>
        <button onClick={onPress}>View Details</button>
    </div>
)
}