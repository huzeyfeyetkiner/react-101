import './App.css';

import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

// function setAgeParam(num){
//   return num += 1
// }

function App() {

  const [name, setName] = useState("Huzeyfe")
  const [age, setAge] = useState(0)
  const [friends, setFriends] = useState (["Burak","Muhammet"])
  const [address, setAddress] = useState({ title: "İstanbul", zip: 34050})



  return (

    <>
      <h2>Merhaba {name}</h2>
      <h2>{age}</h2>

      <button onClick={() => setName("Burak")}>Change Name</button>
      <button onClick={() => setAge(25)}>Change Age</button>

      <br />
      <hr />

      <h2>Friends</h2>

      <ul>
        {
          friends.map((friend , id) => <li key={id}>{friend}</li> )
        }
      </ul>

      <button onClick={() => setFriends([...friends, "Resul"])}>Add Friend</button>
      {/* <button onClick={() => setFriends(friends.concat("Resul"))}>Add Friend</button> */}


      <br />
      <hr />

      <h2>Address</h2>

      <div>{address.title} - {address.zip} {address.province}</div>
      <button onClick={() => setAddress({...address, title: "Ankara"})}>Change Adress</button>
      
      <button onClick={() => setAddress({...address, province:"Eyüp"})}>Add something</button>


    </>
    

  );
}

export default App;
