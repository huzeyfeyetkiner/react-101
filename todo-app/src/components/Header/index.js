import { useState, useEffect } from "react"

function Header({todos,setTodos}) {


  const [todo,setTodo] = useState({completed:false,task:""})

  const onChangeInput = (e) =>{
    setTodo({completed:false, task:e.target.value})
  }

  const formSubmit = (e) => {
    e.preventDefault()
    if(todo.task != ""){
      setTodos([...todos,todo])
    }
  }

  useEffect(() => {
    setTodo( {completed:false,task:""} )
  },[todos])

  return (  
    <div className="main">
      <form onSubmit={formSubmit} action="">
        <div className="toggle-all">V</div>
        <input id="deneme" className="new-todo" placeholder="What needs to be done?" type="text"  onChange={onChangeInput} value={todo.task} autoFocus required/>
      </form>
      
      
    </div>
    


  )
}
export default Header