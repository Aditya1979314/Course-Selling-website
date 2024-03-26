import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Signup(){
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col w-1/4 border border-black-500 gap-4 p-8 py-10">
        <Input label={"Email address"}/>
        <Input label={"password"}/>
        <Button label={"Sign Up"}/>
        <div className="flex flex-row">
        <p>Have an account?</p>
        <Link to='/login' className="text-blue-400 font-bold">Login</Link>
        </div>
        </div>
        </div>
        
    )
}