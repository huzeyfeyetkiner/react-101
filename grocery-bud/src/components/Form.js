import { useState } from "react"
import { useList } from "../context/ListContext";


function Form() {
    const [text, setText] = useState({completed: false, title:""})

    const {setList} = useList()

    const handleSubmit = (e) => {
        e.preventDefault()
        setList(prev => [...prev, text])
        setText({completed: false, title:""})
    }

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
export default Form