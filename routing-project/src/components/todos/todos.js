import { useState } from "react"
import Input from "./input"
import Footer from "./footer"
function Todos() {

  const [todos, setTodos] = useState([{completed:false, task:"Learn React"}, 
  {completed:false, task:"Learn Redux"}, 
  {completed:true, task:"Learn HTML"}
])

  return (
    
    <div className="todos">
      <div className="todos-container">

        <Input todos={todos} setTodos={setTodos}/>

        <div className="list-container">
          <ul>
            {
              todos.map((todo,index) => {
                if(todo.completed == false){
                  return (
                    <li key={index}>
                      <div className="list-layout">
                        <input type="checkbox" name="" id="" checked={false} onChange={() => {
                          const newArray = [...todos]
                          newArray[index].completed = true;
                          setTodos([...newArray])
                        }}/>
                        <span>{todo.task}</span>
                        <button className="btn-delete" onClick={() => {
                          const newArray = [...todos]
                          newArray.splice(index,1)
                          setTodos([...newArray])
                        }}>x</button>
                      </div>
                    </li>
                  )
                }else {
                  return (
                    <li key={index}>
                      <div className="list-layout completed">
                        <input type="checkbox" name="" id="" checked={true} onChange={() => {
                          const newArray = [...todos]
                          newArray[index].completed = false;
                          setTodos([...newArray])
                        }}/>
                        <span>{todo.task}</span>
                        <button className="btn-delete" onClick={() => {
                          const newArray = [...todos]
                          newArray.splice(index,1)
                          setTodos([...newArray])
                        }}>x</button>
                      </div>
                    </li>
                  )
                }
                
              })
            }
          </ul>
        </div>

        <Footer />
      </div>
    </div>
    
  )
}
export default Todos