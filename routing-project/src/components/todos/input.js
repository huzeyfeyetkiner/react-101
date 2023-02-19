import { useState } from "react"

function Input({todos, setTodos}) {

  const [todo, setTodo] = useState({completed: false, task:""})
  console.log(todo.task);

  const formSubmited = (e) => {
    e.preventDefault();
    setTodos([...todos, todo])
    setTodo({completed: false, task:""})
  }

  return (
    <div className="input-container">
      <form action="" onSubmit={formSubmited}>
        <input className="todo-input" type="text" value={todo.task} onChange={
          (e) => setTodo({...todo, task:e.target.value})} autoFocus/>
      </form>
    </div>
  )
}
export default Input