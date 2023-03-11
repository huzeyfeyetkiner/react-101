import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
function Users() {

  const [users, setUsers] = useState([])

  useEffect(() => {

    const getData = async() => {
      const { data } = await axios("https://jsonplaceholder.typicode.com/users")
      setUsers(data)
    }    
    getData()

  }, [])

  return (
    <div>
        <ul>
          {
            users.map((user) => {
              return(
                <li key={user.id}>
                  <Link  to={`${user.id}`} state={user}>{user.name}</Link>     
                </li>
                            
                
              )
            })
          }  
        </ul>
        
      
    </div>
  )
}
export default Users