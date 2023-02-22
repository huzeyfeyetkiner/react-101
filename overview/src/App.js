import { Route, Routes, NavLink } from "react-router-dom";
import Users from "./components/users";
import Signup from "./components/signup";
import User from "./components/user";
import "./App.css"

function App() {
  return (
    <div className="container">      
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={"/signup"}>Signup</NavLink>
          </li>
        </ul>
      </div>
    


    {/* routing gözden geçirilecek */}

    <Routes>
      <Route path="/" element = { <Users /> } >
        <Route path="/" element= { <User /> } />
        <Route path="/:id" element= { <User /> } />
      </Route>
      <Route path="/signup" element ={ <Signup /> }/>
    </Routes>

    </div>
  )
}

export default App;
