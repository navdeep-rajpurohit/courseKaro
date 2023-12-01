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
  useSetRecoilState,
} from 'recoil';
import { userState } from "./store/atoms/user.js";

function App() {

  return (
    <RecoilRoot>
      <Router>
          <MyAppBar />
          <InitUser />
          <div id='pageContent'>
            <Routes>
              <Route path="/user/login" element={<Login />}/>
              <Route path="/user/register" element={<Register />}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/courses" element={<Courses/>}/>
              <Route path="/user/profile" element={<Profile/>}/>
              <Route path="/user/dashboard" element={<Dashboard />}/>
              <Route path="/admin/login" element={<AdminLogin/>}/>
              <Route path="/admin/dashboard" element={<AdminDashboard />}/>
              <Route path="/course/:_id" element={<Course/>}/>
            </Routes>
          </div>
          <Bottombar/>
      </Router>
    </RecoilRoot>
  )
}

function InitUser() {
  const setUser = useSetRecoilState(userState);
  const init = async() => {
    try {
      const response = await axios.get(`${BASE_URL}/me`, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })

    if(response.data.email) {
      setUser({
        isLoading: false,
        userEmail: response.data.email
      })
    }
    else {
      setUser({
        isLoading: false,
        userEmail: null
      })
    }
    } catch (e) {
        setUser({
          isLoading: false,
          userEmail: null
        })
    }
  };

  React.useEffect(() => {
    init();
  }, [])

  return <></>

}

export default App
