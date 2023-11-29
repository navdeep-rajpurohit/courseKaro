import './App.css'
import MyAppBar from './ components/Appbar';
import Login from './ components/Login';
import Register from './ components/Register';
import Home from './ components/Home';
import Courses from './ components/Courses';
import Profile from './ components/Profile';
import Dashboard from './ components/Dashboard';
import AdminLogin from './ components/AdminLogin';
import Course from './ components/Course';
import AdminDashboard from './ components/AdminDashboard';
import Bottombar from './ components/Bottombar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as React from 'react';
import axios  from 'axios';
import {BASE_URL} from "./config.js"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


function App() {
  const [email, setEmail] = React.useState(null);
  const [editId, setEditId] = React.useState(null);

  const init = async() => {
    const response = await axios.get(`${BASE_URL}/me`, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })

    if(response.data.email) {
      setEmail(response.data.email);
      
    }
  };

  React.useEffect(() => {
    init();
  }, [])


  return (
    <RecoilRoot>
      <Router>
          <MyAppBar email={email} setEmail={setEmail}/>
          <div id='pageContent'>
            <Routes>
              <Route path="/user/login" element={<Login setEmail={setEmail} />}/>
              <Route path="/user/register" element={<Register/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/courses" element={<Courses/>}/>
              <Route path="/user/profile" element={<Profile/>}/>
              <Route path="/user/dashboard" element={<Dashboard />}/>
              <Route path="/admin/login" element={<AdminLogin/>}/>
              <Route path="/admin/dashboard" element={<AdminDashboard editId={editId} setEditId={setEditId}/>}/>
              <Route path="/course/:_id" element={<Course/>}/>
            </Routes>
          </div>
          <Bottombar/>
      </Router>
    </RecoilRoot>
  )
}

export default App
