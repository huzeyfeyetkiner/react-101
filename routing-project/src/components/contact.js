import axios from "axios"
import { useEffect, useState } from "react"

function Contact() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then(resp => setUsers(resp.data))
  }, [])
  console.log(users);
  return (
    <div className="users-container">
      <ul className="users">
        {
          users.map((user,index) => <li key={index}>
            <p>{user.name} - {user.email}</p>
            <p>{user.phone}</p>
            <a className="btn-contact" href={`mailto:${user.email}`} >Send Mail</a>
          </li> )
        }
      </ul>
    </div>
  )
}
export default Contact