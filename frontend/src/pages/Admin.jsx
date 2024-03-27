import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import NewCourse from './NewCourse';
import AdminCourses from './AdminCourses';
import CourseItem from '../components/CourseItem';
import {data} from '../utils/data';

export default function Admin(){
    return (
        <div className='flex'>
        <div className='bg-blue-700 h-screen w-1/6 flex flex-col gap-4 items-center p-4 font-bold text-white'>
            <Link to='/admin/newcourse' className='hover:text-black'>New Course</Link>
            <Link to='/admin/courses' className='hover:text-black'>Courses</Link>
        </div>
        <Outlet/>
        </div>
    )
}