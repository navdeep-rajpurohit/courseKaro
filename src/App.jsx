import { useState } from 'react'
import './App.css'
import MyAppBar from './ components/Appbar';
import Login from './ components/Login';
import Register from './ components/Register';
import Home from './ components/Home';
import Courses from './ components/Courses';
import Profile from './ components/Profile';
import Dashboard from './ components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <div>
    <MyAppBar></MyAppBar>
    </div>
    <div id='pageContent'>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="Profile" element={<Profile/>}/>
      <Route path="Dashboard" element={<Dashboard/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
