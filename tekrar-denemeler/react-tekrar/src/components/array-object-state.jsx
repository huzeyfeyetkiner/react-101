import { useState } from "react";




function Content(){


    const [friends, setFriends] = useState(["Resul","Burak"])

    const changeFriends = () => {
            setFriends([...friends,"Mami"])
    }

    const [address, setAddress] = useState({title: "İstanbul", zip:34050})

    const changeAddress = () => {
        setAddress({...address, title:"Ankara"})
    }

    return(        

        <>
            <h2>Friends</h2>
            <ul>
                {
                    friends.map( (friend,index) => <li key={index}>{index} - {friend}</li>)
                }
            </ul>
            <button onClick={changeFriends}>Add Friends</button>

            <hr />
            <h2>Address</h2>
            {
                <h5>{address.title}, {address.zip}</h5>
            }
            <button onClick={changeAddress}>Change Address</button>
        
        </>


    )

}

export default Content