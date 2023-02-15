


function List({todos, setTodos, currentSit}) {
  return (
    
    <div className="list">
      <ul>
        {/* seçilen filtreye göre elemanları listeleme işlemleri */}
        {todos.map((todo,index) => {
          if(currentSit === "All"){ // tüm görevleri listelemek için kullanılır.
            if(todo.completed === false){
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
          }else if(currentSit === "Active"){ // sadece aktif görevleri listelemek için
            if(todo.completed === false){
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
          }else { // tamamlanmış görevleri listelemek için
            if(todo.completed === true){
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
            
          }
          
        })}
      </ul>
    </div>
    
  )
}
export default List