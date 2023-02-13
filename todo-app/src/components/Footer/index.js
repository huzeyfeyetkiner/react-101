import {useState, useEffect} from "react"


function Footer({todos, setTodos, filter, setFilter}) {

  const [len, setLen] = useState(0)

  // tamamlanmamış görev sayısı değiştiğinde sayacı değiştirmek için
  useEffect(()=> {
    let count = 0
    const newArray = [...todos]

    newArray.map(item => {
      if(item.completed == false){
        count +=1
      }
      setLen(count)
    })
  },[todos])


  // filter state'nin değerini değiştirmek için kullanılan fonksiyon, aşağıda her bşr
  const filterList = (e) => {
    setFilter(e.target.name)
  }

  const clearAll = () => {
    const newArray = todos.filter((todo) => todo.completed == false)
    setTodos(newArray)
  }

  return (
    <div className="footer">

      <span className="todo-count">{len} item left</span>

      <ul className="filters">
        <li>
          <a name="All" href="#" onClick={filterList} className={filter === "All" ? "selected":""}>All</a>
        </li>
        <li>
          <a name="Active" href="#" onClick={filterList} className={filter === "Active" ? "selected":""}>Active</a>
        </li>
        <li>
          <a name="Completed" href="#" onClick={filterList} className={filter === "Completed" ? "selected":""}>Completed</a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearAll}>Clear Completed</button>
    


    </div>
  )
}
export default Footer