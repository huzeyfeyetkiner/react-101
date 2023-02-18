
import Home from "./components/home.js"
import About from "./components/about.js"
import Users from "./components/users"
import User from './components/user.js';
import Error404 from "./components/Error404.js"

import { Routes, Route, NavLink } from "react-router-dom";

// isActive özelliği için stillendirme kriterlerini tutan obje
let activeStyle = {
  backgroundColor: "red",
  color: "white",
}

function App() {
  return (
    <div className="App">
       <h1>Welcome to React Router!</h1>
       <nav>
          {/* NavLink ile birlikte Link etiketinden farklı olarak isActive özelliğinden yararlanarak stillendirme kısmındaki kolaylıklardan yararlanabiliyoruz */}
          <NavLink style={( {isActive} ) => isActive ? activeStyle : undefined} to="/">Home</NavLink> {" "}
          <NavLink style={( {isActive} ) => isActive ? activeStyle : undefined} to="/about">About</NavLink> {" "}
          <NavLink style={( {isActive} ) => isActive ? activeStyle : undefined} to="/users">Users</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* users altındaki iç içe root yapısı sayesinde users componentinin içerisinde user componentinin renderlanacağı alanı outlet etiketi ile belirleyebiliyoruz. */}
          <Route path="users" element={<Users />} >
            <Route path=":id" element={<User />} />
          </Route>
          <Route path="*" element={<Error404 />} ></Route>

        </Routes>
    </div>
  );
}

export default App;
