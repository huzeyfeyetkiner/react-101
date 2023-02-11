import {useState, useEffect} from "react"

import List from "./List"
import Form from "./Form"

function Contacts(){


    const [contacts, setContacts] = useState([])

    useEffect(() => {
        console.log(contacts);
    },[contacts])

    return(
        <>

            <div>Contacts</div>
            <List />
            <Form contacts={contacts} addContacts={setContacts}/>

        </>
    )
}

export default Contacts