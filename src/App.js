import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
  Link,
  HashRouter
} from "react-router-dom";
import Component from './Component';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HashRouter basename='/'>
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
