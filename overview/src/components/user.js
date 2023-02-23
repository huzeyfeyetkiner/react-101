import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function User() {
  
  const {id} = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((resp) => setUser(resp.data))
  },[id])

  return (
    <div className="user-container">
      <div className="img-container">
        <img src="https://media.istockphoto.com/id/1219224632/photo/smiling-male-ceo-posing-alone-in-modern-office.jpg?s=170667a&w=0&k=20&c=Xhi_WoKFjwhDYTCcRN2gWI1TIs1OawEvNmmhpRZRVdc="  alt="" />       
      </div>

      <div className="details-container">
        <h2 style={{fontStyle:"italic"}}>{user.name}</h2>
        <h3 className="text"> <span style={{color:"black"}}>Username:</span>  {user.username}</h3>
        <br />
        <a href={`mailto:${user.email}`}>Mail Gönder</a>
      </div>
      
    </div>
  )
}
export default User