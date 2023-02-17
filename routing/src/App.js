import './App.css';
import Home from "./components/home.js"
import About from "./components/about.js"
import Users from "./components/users"
import User from './components/user.js';

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="user/:id" element={<User />} />

        </Routes>
    </div>
  );
}

export default App;
