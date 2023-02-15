import axios from "axios"
import {useState , useEffect} from "react"

function Users() {

    const [users, setUsers] = useState([])
    // fetch işlemi gerçekleştirilirken ekrana loading yazısı vermek için kullanılan state
    const [isLoading, setIsLoading] = useState(true)
    // useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(data => data.json())
        .then(data => {
            setUsers(data)
            setIsLoading(false)
        })

    // },[])

    //yukarıda fetch ile yapılan işlemi axios kütüphanesi ile gerçekleştirdim.
    // useEffect(() => {
    //     const getData = async () => {
    //         try{
    //             const {data: users} = await axios("https://jsonplaceholder.typicode.com/users")
    //             setUsers(users)
    //         }catch(e){
    //             console.log(e);
    //         }finally{
    //             setIsLoading(false)
    //         }           
    //     }
    //     getData()
    // })

  return (
    <div>
        <h1>Users</h1>
        {/* başlangıçta fetch işlemi gerçekleştirilirken ekranda loading yazısı gözükmesini sağlayan div */}
        { isLoading && <h3>Loading...</h3> }
        {/* kullanıcıları ekrana yazdıran div */}
        { users && users.map(users => <div key={users.id}>{users.name}</div> ) }
    </div>
  )
}
export default Users