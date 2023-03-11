
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Dashboard/Home';
import Users from "./pages/Dashboard/Users"
import Contact from './pages/Dashboard/Contact';
import UserDetail from './pages/Dashboard/UserDetail';
import DashBoardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <Routes>
          <Route path='/' element={<DashBoardLayout/>}>
            <Route index element={<Home />} />
            <Route path='users' element={<Users />} />
            <Route path='users/:id' element={<UserDetail />} />
            <Route path='contact' element={<Contact />} />
          </Route>
          
          <Route path='auth' element={<AuthLayout />} >
            <Route index element={ <Login /> } />
            <Route path='register' element={ <Register /> } />
          </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
