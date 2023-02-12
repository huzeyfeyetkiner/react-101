import { useState, useEffect } from "react"


function Form({contacts, setContacts}) {
  
  const [contact, setContact] = useState({fullName:"", phoneNumber:""})

  function formSubmit(e){
    e.preventDefault()    

    setContacts([...contacts, contact])
    // console.log(contact);
  }


  function inputChange(e){
    setContact({...contact, [e.target.name]:e.target.value})
  }

  return (    

    <form onSubmit={formSubmit}>    
      <input name="fullName" onChange={inputChange} type="text" placeholder="Name" required/> <br />
      <input name="phoneNumber" onChange={inputChange} type="text" placeholder="Phone Number" required/> <br />

      <button>Add</button>
    
    </form>
  )

}
export default Form