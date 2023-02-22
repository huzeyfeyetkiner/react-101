import { Route, Routes, NavLink } from "react-router-dom"

import MainLayout from "./layouts/mainLayout";
import Signup from "./Pages/signup";
import Home from "./Pages/home";
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <MainLayout /> } > 
          <Route path="/home" element={ <Home /> } /> 
          <Route path="/signup" element={ <Signup /> } /> 
        </Route>
        
        
      </Routes>
    </>
  )
}

export default App;
