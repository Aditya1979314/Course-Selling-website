import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Courses from './pages/Courses';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Course from './pages/Course';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (<div>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}>
          <Route path='home'element={<Home />} />
          <Route path='courses'element={<Courses />} />
          <Route path='course' element={<Course/>}/>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          </Route>
          <Route path='admin' element={<Admin/>}/>
          <Route path='adminLogin' element={<AdminLogin/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
