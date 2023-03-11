import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function UserDetail() {

    const { id } = useParams()

    const [user, setUser] = useState()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(resp => resp.json())
        .then(data => setUser(data))
    }, [id])

  return (
    <div>
        <h2>User Details</h2>

        {!user && <p>Loading...</p>}
        {user && <p>{JSON.stringify(user)}</p>}        
        
    </div>
  )
}
export default UserDetail