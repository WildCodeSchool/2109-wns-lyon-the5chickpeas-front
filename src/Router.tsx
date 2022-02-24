import React from 'react'
// pages
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
<<<<<<< HEAD
import TasksList from './pages/TasksList';
import ProjectsList from './pages/ProjectsList';

=======
import Dashboard from './pages/Dashboard';
>>>>>>> 138a68ca63c6b869729eef7fbe03445e11f51b30
// import ValidateAccount from './pages/Homepage';
// Router
import {
    BrowserRouter,
    Routes,
    Route } from "react-router-dom";
import ValidateAccount from './pages/ValidateAccount';
import Profile from './pages/Profile';

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
            </Routes>
        </BrowserRouter>
    )
}
