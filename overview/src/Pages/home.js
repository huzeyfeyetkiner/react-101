import { NavLink, Outlet } from "react-router-dom"

function Home() {
  return (
    <div>
        <h1>Home</h1>

        <NavLink to={"users"}>Users</NavLink>
        <NavLink to={"products"}>Products</NavLink>

        <Outlet />

    </div>
  )
}
export default Home