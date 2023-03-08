import { useState } from "react"


const defaultTodos = [
    {name: "Item A"},
    {name: "Item B"},
    {name: "Item C"},

]

function Todo() {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState(defaultTodos)

  return (
    <div>
        <label>
            Text
            <input type="text" value={todo} onChange={(e) => {setTodo(e.target.value)}} />
        </label>
        
        <button onClick={() => {
            setTodos([...todos, {name: todo}])
            setTodo("")
            }}>Add</button>
        <br />
        {
            todos.map((item,index) => {
                return(
                    <div key={index}>{item.name}</div>
                )
            })
        }
    </div>
  )
}
export default Todo