import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function User() {

  const [user,setUser] = useState({})
  const {id} = useParams()

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => setUser(resp.data))
  }, [id])

  return (
    <div className="user-container">
      

      { !id && <h4>User detail will be shown here</h4> }
      { id &&
        <>
          <h3>User Details</h3>
          <img src="" alt="" />

          <h4>Name: {user.name}</h4>
          <h4>Email: {user.email}</h4>
          <h4>Username: {user.username}</h4>
          <h4>Tel: {user.phone}</h4>
          <h4>Website: {user.website}</h4>
        </>
        
      }
        

      
    </div>
  )
}
export default User