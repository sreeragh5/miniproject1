import React from 'react'
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Agentlogin from './pages/agent/Agentlogin';
import SignUp from './pages/signup/Signup';
import Adashboard from './pages/admindashboard/Adashboard';
import Subject from './pages/admindashboard/Subject';
import Exam from './pages/admindashboard/Exam';
import SDashBoard from './pages/studentDashBoard/SDashBoard';
import Apply from './pages/studentDashBoard/Apply';
import LandingPage from './pages/signup/LandingPage';
import LoginU from './pages/User/LoginU';
import Userlogin from './pages/User/UserLogin';






export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/agent_login" element={<Agentlogin />} />
      <Route path="/user_login" element={<Userlogin />}/>
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/dashboard/admin" element={<Adashboard />} />
      <Route path="/dashboard/subject" element={<Subject />} />
      <Route path="/dashboard/exam" element={<Exam />} />
      <Route path="/dashboard/student" element={<SDashBoard />} />
      <Route path="/dashboard/student/apply" element={<Apply />} />
      <Route path ="/" element={<LandingPage />}/>
   </Routes>
   </BrowserRouter>
 
  )
}

