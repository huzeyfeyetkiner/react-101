import { useEffect, useState } from "react"




function List({contacts}) {

  const [searchText, setSearchText] = useState("")

  const filtered = contacts.filter((contact) => {
    return Object.keys(contact).some((key) => {
      return contact[key].toString().toLowerCase().includes(searchText.toLowerCase())
    })
  })

  return (

      <>  

        <input value={searchText} type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Ara"/>

        <ul>
          {filtered.map((contact,id) => <li key={id}>{contact.fullName} - {contact.phoneNumber}</li>)}
        </ul>
      </>
  )
}
export default List