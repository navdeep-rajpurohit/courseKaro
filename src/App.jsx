import { useState } from 'react'
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
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


function App() {

  return (
    <RecoilRoot>
      <div>
        <div>
          <MyAppBar/>
        </div>
        <div id='pageContent'>
        <Routes>
          <Route path="/user/login" element={<Login/>}/>
          <Route path="/user/register" element={<Register/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/user/profile" element={<Profile/>}/>
          <Route path="/user/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/login" element={<AdminLogin/>}/>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
          <Route path="/course/:_id" element={<Course/>}/>
        </Routes>
        </div>
        <div>
          <Bottombar/>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App
