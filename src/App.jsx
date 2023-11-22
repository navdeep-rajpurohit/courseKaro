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
import AdminPanel from './ components/AdminPanel';
import Bottombar from './ components/Bottombar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
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
      </Routes>
      </div>
      <div>
        <Bottombar/>
      </div>
    </div>
  )
}

export default App
