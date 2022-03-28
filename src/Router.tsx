import React from 'react'
// pages
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TasksList from './pages/TasksList';
import ProjectsList from './pages/ProjectsList';
import Dashboard from './pages/Dashboard';
// import ValidateAccount from './pages/Homepage';
// Router
import {
    BrowserRouter,
    Routes,
    Route } from "react-router-dom";
import ValidateAccount from './pages/ValidateAccount';
import Profile from './pages/Profile';
import AddProject from './pages/AddProject';
import AddTask from './pages/AddTask';


export function Router() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/tasksList" element={<TasksList/>} />
                <Route path="/projectsList" element={<ProjectsList/>} />
                <Route path="/validate-account/:token" element={<ValidateAccount />}></Route>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/addProject" element={<AddProject/>} />
                <Route path="/addTask" element={<AddTask/>} />
            </Routes>
        </BrowserRouter>
    )
}
