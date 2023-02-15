function List({todos,setTodos}) {
  return (
    
    <div className="list">
      <ul>
        {todos.map((todo,index) => {
          if(todo.completed == false){
            return (
              <li key={index}>
                <div className="inside-li">
                  <input className="toggle" type="checkbox" checked={false} onChange={() => {
                    const newArray = [...todos]
                    newArray[index].completed = true
                    setTodos([...newArray])
                  }}/>
                  <p>{todo.task}</p>
                  <button className="close-btn" onClick={()=>{
                    const newArray = [...todos]
                    newArray.splice(index,1)
                    setTodos([...newArray])
                  }}>x</button>
                </div>
              </li>
            )
          }
          else{
            return (
              <li key={index}>
                <div className="inside-li completed">
                  <input className="toggle" type="checkbox" checked={true} onChange={() => {
                    const newArray = [...todos]
                    newArray[index].completed = false
                    setTodos([...newArray])
                  }}/>
                  <p>{todo.task}</p>
                  <button className="close-btn" onClick={()=>{
                    const newArray = [...todos]
                    newArray.splice(index,1)
                    setTodos([...newArray])
                  }}>x</button>
                </div>
              </li>
            )
          }
        })}
      </ul>
    </div>
    
  )
}
export default List