import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Component from './Component';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    
        <BrowserRouter basename='/'>
        <Link to="/actionCamp">Home</Link>
        <Routes>
          <Route path="/actionCamp" element={<Component />}></Route>
        </Routes>
      </BrowserRouter>
      </header>
      <div>
        Component 1

      </div>
    </div>
  );
}

export default App;
