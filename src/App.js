import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
  Link,
  useNavigate, useLocation
} from "react-router-dom";
import React, { useEffect } from 'react';

import Component from './Component';
function App() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // useEffect(() => {
  //   // Check if the current URL path matches the specific one triggering the redirect
  //   const currentPath = location.pathname;
  //   if (currentPath === '/actionCamp') {
  //     // Redirect using navigate
  //     navigate('/actionCamp'); // Replace '/your-component-path' with your desired component path
  //   }
  // }, [location, navigate]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
        <Link to="/actionCamp" >Component</Link>

        <Routes>          
          <Route path="/actionCamp" element={<Component />}></Route>
        </Routes>
      </header>
      <div>
        Component 1

      </div>
    </div>
  );
}

export default App;
