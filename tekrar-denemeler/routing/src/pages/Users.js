import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import axios from "axios"
function Users() {

  const [users, setUsers] = useState([])
  const navigate = useNavigate()
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
              <li key={user.id} onClick={() => navigate(`${user.id}`)}>{user.name}</li>
            )
          })
        }
      </ul>
      

      <Outlet />
    </div>
  )
}
export default Users