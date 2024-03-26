import {Link, Outlet, useNavigate} from 'react-router-dom'
import Home from './Home'
import { useState } from 'react'
import Button from '../components/Button'


export default function Landing(){
const[isauth,setauth] = useState(false);

function renderlinks(isauth){
if(isauth){
    return(<>
        <Link to='/purchased'>purchased</Link>
        <Link to='/settings'>settings</Link>
        <button>logout</button>
        </>
    )
}
}

const navigate = useNavigate();

function signupClick(){
    navigate("/signup");
}

function loginClick(){
    navigate("/login");
}

    return (
        <div>
            <div className="py-4 px-8 shadow-md flex justify-between items-center">
            <span className='text-blue-700 basis-1/4'>100X</span>
            <div className='flex justify-between basis-1/4 items-center'> 
            <Link to='/home'>Home</Link>
            <Link to='/courses'>Courses</Link>
            <Button to={signupClick} label={'Signup'}/>
            <Button to={loginClick} label={'Login'}/>
            {
               renderlinks(isauth)
            }
            </div>
            </div>


            <Outlet/>
        </div>
    )
}