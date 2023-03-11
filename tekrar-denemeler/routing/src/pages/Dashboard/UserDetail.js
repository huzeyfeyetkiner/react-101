import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"

function UserDetail() {

    const { id } = useParams()

    
    const location = useLocation()

    const [user, setUser] = useState( location.state )

    console.log(location.state);

    useEffect(() => {
        if(!user?.id){
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(resp => resp.json())
            .then(data => setUser(data))
        }        

    }, [id, user])

  return (
    <div>
        <h2>User Details</h2>

        {!user && <p>Loading...</p>}
        {user && <p>{JSON.stringify(user)}</p>}        
        
    </div>
  )
}
export default UserDetail