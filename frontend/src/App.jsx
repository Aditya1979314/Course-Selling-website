import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Courses from './pages/Courses';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Course from './pages/Course';

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
      </Routes>
    </BrowserRouter>
    this is some randomo text
  </div>
  );
}

export default App;
