import { useState, useEffect } from "react"

import { Link, Outlet } from "react-router-dom"
import axios from "axios"

function User() {

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(()=> {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data))
      .finally(()=> {
        setLoading(false)
      })    
  },[])

  return (
    <div>
        
      <h2>Users</h2>

      <ul style={{display:"inline-block", borderRight:"2px solid black", padding:"5px"}}>
        {loading && <h4>Loading...</h4>}
        {
          users.map((user) => <li style={{listStyleType:"none"}} key={user.id}>
            
            <Link to={`/users/${user.id}`}>{user.name}</Link>

          </li> )
        }
      </ul>


      <div className="userLayout" style={{display:"inline-block", padding:"15px"}}>
        <Outlet />
        {/* bu etiket user componentinin renderlanacağı yeri gösteriyor */}
      </div>

    </div>
  )
}
export default User