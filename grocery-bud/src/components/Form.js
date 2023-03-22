import { useState } from "react"
import { useList } from "../context/ListContext";


function Form() {
    const [text, setText] = useState({completed: false, title:""})

    const {list, setList, edit, editID, setEdit} = useList()

    const handleSubmit = (e) => {
        e.preventDefault()
        setList(prev => [...prev, text])
        setText({completed: false, title:""})
    }

    const handleEdit = (e) => {
      e.preventDefault()
      setEdit(false)
      const newArray = list;
      newArray[editID].title = text.title
      setList([...newArray])
      setText({completed: false, title:""})
    }    

  if(!edit) {
    return (
    
      <form className="form-container" onSubmit={handleSubmit}>
          <input 
          type="text" 
          value={text.title} 
          onChange={(e) => setText({...text, title:e.target.value})}
          />
          <button type="submit">Add Item</button>
      </form>
    )
  }
  else{
    return (
    
      <form className="form-container" onSubmit={handleEdit}>
          <input 
          type="text" 
          value={text.title} 
          onChange={(e) => setText({...text, title:e.target.value})}
          />
          <button type="submit">Edit Item</button>
      </form>
    )
  }
  
}
export default Form