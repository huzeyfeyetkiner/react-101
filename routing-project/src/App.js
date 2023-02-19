import { Route, NavLink, Routes } from 'react-router-dom';

import Home from './components/home';
import About from './components/about-us';
import Contact from './components/contact';
import Todos from "./components/todos/todos"
import Sticky from "./components/sticky"

import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="nav-container">
        <ul>
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      




      <Routes>
        <Route path="/" element={ <Home /> }>
          <Route path="/" element={ <Todos /> } />          
          <Route path="/sticky" element={ <Sticky /> } />          
        </Route>
        <Route path="about-us" element={ <About /> } />
        <Route path="contact" element={ <Contact /> } />

      </Routes>
    </div>

    



  );
}

export default App;
