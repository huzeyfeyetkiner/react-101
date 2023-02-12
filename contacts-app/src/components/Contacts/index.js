import Form from "./Form" 
import List from "./List"
import "./styles.css"

import { useState, useEffect } from "react"

function Contacts() {

    const [contacts, setContacts] = useState([
      {fullName:"Huzeyfe", phoneNumber:"5334390000"}, 
      {fullName:"Burak", phoneNumber:"5304190000"},
      {fullName:"Resul", phoneNumber:"5300110012"},
      {fullName:"Samet", phoneNumber:"5421102010"},
    ])

    useEffect(()=>{
        console.log(contacts);
    },[contacts])

  return (

    <div className="container">
        <h1>Contacts App</h1>
        
        <List contacts={contacts}/>

        <Form contacts={contacts} setContacts={setContacts} />
    </div>


  )
}
export default Contacts