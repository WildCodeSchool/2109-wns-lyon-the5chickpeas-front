import React from 'react';
import { Router } from './Router';
// styles
import GlobalStyle from './components/Global';

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <Router />
    </div>
  );
}

export default App;
