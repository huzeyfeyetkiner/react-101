import axios from "axios"
import { Outlet, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then((resp) => setUsers(resp.data))
    }, [])

  return (
    <div className="users-container">
        
        

        <div className="users-nav">
            
            <ul>
                <h2>Users</h2>
                {
                    users.map((user) => {
                        return(
                            <li key={user.id}>
                                <NavLink className={({isActive}) => isActive ? "active-user" : undefined } to={`/${user.id}`}>{user.name}</NavLink>
                            </li>
                        )
                    } )
                }
            </ul>
        </div>            
        
        <div className="user-content">
            <Outlet />
        </div>

    </div>
    
  )
}
export default Users