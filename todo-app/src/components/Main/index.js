function Main({filter, todos, setTodos}) {
  return (


    <div className="main">
      <input className="toggle-all" type="checkbox" name="" id="" />

      
        <ul className="todo-list">
        {
          todos.map((todo,index) => {
            if(filter === "All"){
              if(todo.completed == false){
                return(
                  <li key={index}>
                    <div className="view">
                      <input type="checkbox" className="toggle" checked={false} onChange={() => {
                        const newArray = [...todos]
                        newArray[index].completed = true
                        setTodos([...newArray])
                      }} />
                      <label htmlFor="">{todo.task}</label>
                      <button className="destroy" onClick={()=>{
                          const newArray = [...todos]
                          newArray.splice(index,1)
                          setTodos([...newArray])
                      }}></button>
                    </div>
                  </li>
                )
              }else{
                return(
                  <li className="completed" key={index}>
                    <div className="view">
                      <input type="checkbox" className="toggle" checked={true} onChange={() => {
                        const newArray = [...todos]
                        newArray[index].completed = false
                        setTodos([...newArray])
                      }} />
                      <label htmlFor="">{todo.task}</label>
                      <button className="destroy" onClick={()=>{
                          const newArray = [...todos]
                          newArray.splice(index,1)
                          setTodos([...newArray])
                      }}></button>
                    </div>
                  </li>
                )
              }
            }else if(filter ==="Active"){
              if(todo.completed === false){
                return(
                  <li key={index}>
                    <div className="view">
                      <input type="checkbox" className="toggle" checked={false} onChange={() => {
                        const newArray = [...todos]
                        newArray[index].completed = true
                        setTodos([...newArray])
                      }} />
                      <label htmlFor="">{todo.task}</label>
                      <button className="destroy" onClick={()=>{
                          const newArray = [...todos]
                          newArray.splice(index,1)
                          setTodos([...newArray])
                      }}></button>
                    </div>
                  </li>
                )
              }
            }else{
              if(todo.completed == true){
                return(
                  <li className="completed" key={index}>
                    <div className="view">
                      <input type="checkbox" className="toggle" checked={true} onChange={() => {
                        const newArray = [...todos]
                        newArray[index].completed = false
                        setTodos([...newArray])
                      }} />
                      <label htmlFor="">{todo.task}</label>
                      <button className="destroy" onClick={()=>{
                          const newArray = [...todos]
                          newArray.splice(index,1)
                          setTodos([...newArray])
                      }}></button>
                    </div>
                  </li>
                )
              }
            }
          })
        }
      </ul>
      
      


    </div>
  )
}
export default Main