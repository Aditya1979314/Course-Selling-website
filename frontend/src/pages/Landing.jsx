import {Link, Outlet} from 'react-router-dom'
import Home from './Home'
import { useState } from 'react'


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

    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/login'>Login</Link>
            {
               renderlinks(isauth)
            }

            <Outlet/>
        </div>
    )
}