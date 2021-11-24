import React from 'react';
// pages
import Homepage from './pages/Homepage';
// import ValidateAccount from './pages/Homepage';
// styles
import GlobalStyle from './components/Global';
// Router
import {
    BrowserRouter,
    Routes,
    Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                {/* <Route path="/validateAccount" element={<ValidateAccount />} /> */}
                <Route path="/" element={<Homepage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
