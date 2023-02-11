import {useState} from "react"

function Form({contacts, addContacts}) {    

    const [form, setForm] = useState({fullName:"", phone:""})

    const onChangeInput = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        if(form.fullName === "" || form.phone === ""){
            console.log("Değer gir");
            return false;
        }        
        addContacts([...contacts, form])

        setForm({fullName:"", phone:""})
    }

  return (   
    <form onSubmit={onFormSubmit}>
        <div>
            <input name="fullName" type="text" value={form.fullName} placeholder="Name" onChange={onChangeInput}/>
        </div>

        <div>
            <input name="phone" type="text" value={form.phone} placeholder="Phone Number" onChange={onChangeInput}/>
        </div>

        <div>
            <button>Add</button>
        </div>        
    </form> 
    
  )
}
export default Form