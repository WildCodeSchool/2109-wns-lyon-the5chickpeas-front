import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import GlobalStyle from './components/Global';
// Router
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                {/* <Route path="/validateAccount" element={<App/>} /> */}
                <Route path="/" element={<Homepage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
