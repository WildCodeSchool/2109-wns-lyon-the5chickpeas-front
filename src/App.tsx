import React from "react";
import { Router } from "./Router";
// styles
import GlobalStyle from "./components/Global";
import { AuthProvider } from "./hooks/auth";

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <GlobalStyle />
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
