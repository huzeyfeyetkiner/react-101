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
        
        <h1>User Details</h1>
        
        { loading && <h4>Loading...</h4> }
        { !loading && <div>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <Link to={`/users/${parseInt(user.id) + 1}`}>Next User({parseInt(user.id) + 1})</Link>
        </div> }
        
        
    </>
  )
}
export default User