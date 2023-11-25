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
import AdminPanel from './ components/AdminPanel';
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
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/admin" element={<AdminLogin/>}/>
          <Route path="/adminpanel" element={<AdminPanel/>}/>
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
