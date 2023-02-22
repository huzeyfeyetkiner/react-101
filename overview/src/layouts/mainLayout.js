import { NavLink, Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div>
    <h1>Layout</h1>
    <ul>
        <li>
            <NavLink to={"/home"}>Home</NavLink>
        </li>
        <li>
            <NavLink to={"/signup"}>Signup</NavLink>
        </li>        
    </ul>

    <Outlet />


    </div>
  )
}
export default MainLayout