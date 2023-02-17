import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"


function User() {

const [user, setUser] = useState({})
const { id } = useParams()

useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/users/"+id)
        .then(resp => setUser(resp.data))
})

  return (
    <div>
        <nav>
            <Link to="/">Home</Link> {" "}
            <Link to="/about">About</Link> {" "}
            <Link to="/users">Users</Link>
        </nav>


        <h1>User Details</h1>
        <code>{JSON.stringify(user)}</code>
    </div>
  )
}
export default User