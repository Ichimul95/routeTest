import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
  Link,
  useNavigate, useLocation, HashRouter
} from "react-router-dom";
import React, { useEffect,useState } from 'react';

import Component from './Component';
function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <HashRouter>
        <Link to="/actionCamp" >Component</Link> 

        <Routes>    

          <Route path="/actionCamp" element={<Component />}></Route>
        </Routes>
      </HashRouter>
      </header>
      
      <div>
        Component 1

      </div>
    </div>
  );
}

export default App;
