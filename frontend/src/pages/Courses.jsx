import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"
import {data} from '../utils/data';
import reactlogo from '../images/react-image.png';
import Button from '../components/Button';

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


function CourseItem({id,description,onPress,image,title,price}){
return (
    <div className="w-70 shadow-md p-8 flex flex-col space-y-4">
        <img src={reactlogo} className="w-1/2 self-center"/>
        <h2 className="font-bold">{title}</h2>
        <div className="font-light">
        {description}
        </div>
        <div className="font-bold">{price}</div>
        <Button label={"View Details"}/>
    </div>
)
}