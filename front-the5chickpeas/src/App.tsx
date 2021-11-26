import React from 'react';
// pages
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
// import ValidateAccount from './pages/Homepage';
// styles
import GlobalStyle from './components/Global';
// Router
import {
    BrowserRouter,
    Routes,
    Route } from "react-router-dom";
import ValidateAccount from './pages/ValidateAccount';

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/validate-account/:token" element={<ValidateAccount />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
