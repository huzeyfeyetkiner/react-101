import { NavLink, Outlet } from "react-router-dom"

function Home() {
  return (
    <>
    <div className="left-nav">
        <ul>
          <li>
            <NavLink to="/" >Todos</NavLink>
          </li>
          <li>
            <NavLink to="/Sticky">Sticky</NavLink>
          </li>
        </ul>
      </div>
      <div className="content">
        <Outlet></Outlet>
      </div>
    </>
    

      
  )
}
export default Home