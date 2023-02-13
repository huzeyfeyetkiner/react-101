function Main({filter, todos, setTodos}) {
  return (

    <div className="main">
      
        <ul className="todo-list">
        {
          // prop olarak alınan filter state'i içerisindeki değere göre liste elemanlarını sıralamak istiyoruz.
          // filter all olduğu sürece tamamlanmış olsun olmasın tüm görevler listelenecek
          todos.map((todo,index) => {
            if(filter === "All"){ // tüm görevlerin listelenmesi için
              if(todo.completed == false){ // tamamlanmamış görevlerin renderında checkbox işaretsiz ve label içerisindeki yazı normal gözükecek
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
              }else{ // tamamlanmış görevlerin renderında checkbox işaretli ve label içerisindeki yazıya line-through uygulanmış şekilde gözükecek
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
            }else if(filter ==="Active"){ // tamamlanmamış, aktif görevlerin listelenmesi için
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
            }else{ // tamamlanmış görevlerin listelenmesi için
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