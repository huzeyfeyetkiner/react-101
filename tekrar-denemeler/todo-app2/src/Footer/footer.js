import { useState, useEffect } from "react"


function Footer({currentSit, setCurrentSit, todos, setTodos}) {

  const filter = (e) => {
    setCurrentSit(e.target.name)
  }

  const clearCompleted = () => {
    const newArray = todos.filter(todo => todo.completed !== true)
    setTodos(newArray)
  }

  const [counter, setCounter] = useState(0)
  
  useEffect(() => {
    let count = 0;
    const newArray = [...todos]
    newArray.map((todo) => {
      if(todo.completed === false){
        count += 1
      }

    setCounter(count)
    })
  },[todos])

  return (
    <div className="footer">
      <span>Total uncompleted task ({counter})</span>
      <ul>
        <li><a name="All" href="#" onClick={filter} className={currentSit === "All" ? "selected" : ""}>All</a></li>
        <li><a name="Active" href="#" onClick={filter} className={currentSit === "Active" ? "selected" : ""}>Active</a></li>
        <li><a name="Completed" href="#" onClick={filter} className={currentSit === "Completed" ? "selected" : ""}>Completed</a></li>
      </ul>

      <button className="clear-btn" onClick={clearCompleted}>Clear Completed</button>

    </div>
  )
}
export default Footer