import UserContext from "../context/UserContext";
import { useContext, useState } from "react";



function Profile() {

    const {user, setUser} = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({id:"1", username:"huzeyfe", title:"student"})
            setLoading(false)
        }, 1500);
    }

  return (
    <div>
        <code>{user ? JSON.stringify(user) : "değer burada gözükecek"}</code>
        <br />
        {
            !user &&  <button onClick={handleLogin}>{!loading ? "Login" : "Loading..."}</button>
        }
       
    </div>
  )
}
export default Profile
