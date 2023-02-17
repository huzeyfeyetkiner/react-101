import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"


function User() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})
  const { id } = useParams()

useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/users/"+id)
        .then(resp => setUser(resp.data))
        .finally(()=> {
          setLoading(false)
        })
}, [id])

  return (
    <>
        <nav>
            <Link to="/">Home</Link> {" "}
            <Link to="/about">About</Link> {" "}
            <Link to="/users">Users</Link>
        </nav>


        <h1>User Details</h1>
        { loading && <h4>Loading...</h4> }
        { !loading && <div>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <Link to={`/user/${parseInt(user.id) + 1}`}>Next User({parseInt(user.id) + 1})</Link>
        </div> }
        
        
    </>
  )
}
export default User