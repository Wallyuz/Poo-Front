import React, { useState } from 'react';
import AppRoutes from './Routes/Routes';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <AppRoutes onLogin={handleLogin} />
    </>
  );
}

export default App;
