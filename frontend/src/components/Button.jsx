 import{Link} from 'react-router-dom'
 
 export default function Button({label,to}){
    return (
        <Link to={to} className='py-2 px-6 text-white bg-blue-700 rounded-full text-center'>{label}</Link>
    )
}