import Button from "../components/Button";
import { Link } from "react-router-dom";
import Input from '../components/Input'

export default function Login(){
    return (
        <div>
              <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col w-1/4 border border-black-500 gap-4 p-8 py-10">
            <Input label={"Email address"}/>
        <Input label={"password"}/>
        <Button label={"Login"}/>
        <div className="flex flex-row">
        <p>Don't have an account?</p>
        <Link to='/signup' className="text-blue-400 font-bold">Signup</Link>
        </div>
        </div>
        </div>
        </div>
    )
}