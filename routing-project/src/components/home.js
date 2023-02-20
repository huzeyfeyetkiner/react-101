import { NavLink, Outlet } from "react-router-dom"

function Home() {
  return (
    <div className="app">
    <div className="left-nav">
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "active" : ""} to="/" >Todos</NavLink>
          </li>
          <li>
            <NavLink to="/Sticky">Sticky</NavLink>
          </li>
        </ul>
      </div>
      <div className="content">
        <Outlet></Outlet>
      </div>
    </div>
    

      
  )
}
export default Home