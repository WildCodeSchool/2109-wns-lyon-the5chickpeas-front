import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Homepage />
      <SignUp/>
      <Login/>
    </div>
  );
}

export default App;
