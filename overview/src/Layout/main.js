import { NavLink, Outlet } from "react-router-dom"

function Main() {
  return (
    <div className="main">
       
        <div className="main-navbar">
                <ul>
                    <li>
                        <NavLink to="/">Ana Sayfa</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">Kayıt Ol</NavLink>
                    </li>
                </ul>
        </div>
        
        <Outlet />
              

    </div>
  )
}
export default Main