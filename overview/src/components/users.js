import { NavLink, Outlet } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"



function Users() {

  const [users, setUsers] = useState()

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then(resp => setUsers(resp.data))
  },[users])

  return (
    <div className="users-container">

      <div className="users-nav">
        <ul>
        { users && users.map((user) => 
          <li key={user.id}>
            <NavLink to={`${user.id}`}>{user.name}</NavLink>
          </li>  
        ) }
        </ul>
        
      </div>

      <div className="content">
        <Outlet context={users}></Outlet>
      </div>
     


    </div>
  )
}
export default Users