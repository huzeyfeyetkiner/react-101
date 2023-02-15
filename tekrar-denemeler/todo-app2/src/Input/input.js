import {useState, useEffect} from "react"

function Input({todos,setTodos}) {

  const [todo, setTodo] = useState({completed:false, task:""})



  const changeInput = (e) => {
    setTodo({...todo, task:e.target.value})
  }
  console.log(todo)

  const formSubmit = (e) => {
    e.preventDefault()
    if(todo.task != ""){
      setTodos([...todos,todo])
    }
    setTodo({...todo,task:""})
  }

  return (

    <div className="input-area">
        <form onSubmit={formSubmit} action="">
          <input className="task-input" value={todo.task} type="text" name="todo-input" onChange={changeInput} placeholder="Give the task" autoFocus required/>
          <button>Add</button>
        </form>
        
    </div>
  )
}
export default Input