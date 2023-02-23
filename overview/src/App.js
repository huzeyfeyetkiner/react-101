import { Route, Routes } from "react-router-dom"
import "./App.css"
import Main from "./Layout/main";
import Users from "./pages/users.js";
import Signup from "./pages/signup";
import User from "./components/user";


function App() {
  return (
    <div className="app">     


      <Routes>
        <Route path="/" element={ <Main /> } >
         <Route path="/" element={ <Users /> } >  
          <Route path=":id" element={ <User />} />
         </Route>        
         <Route path="/signup" element={ <Signup /> } />          
        </Route>
      </Routes>

    </div>
  )
}

export default App;
