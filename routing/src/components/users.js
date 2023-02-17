import { useState, useEffect } from "react"

import { Link } from "react-router-dom"
import axios from "axios"

function User() {


  const [users, setUsers] = useState([])



  useEffect(()=> {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data))    
  },[])

  return (
    <div>
        <nav>
          <Link to="/">Home</Link> {" "}
          <Link to="/about">About</Link> {" "}
          <Link to="/users">Users</Link>
        </nav>
        
      <h2>Users</h2>

      <ul>
        {
          users.map((user) => <li style={{listStyleType:"none"}} key={user.id}>
            
            <Link to={`/user/${user.id}`}>{user.name}</Link>

          </li> )
        }
      </ul>
    </div>
  )
}
export default User