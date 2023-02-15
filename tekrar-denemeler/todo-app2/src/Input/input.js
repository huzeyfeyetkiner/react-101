import {useState} from "react"

function Input({todos,setTodos}) {

  const [todo, setTodo] = useState({completed:false, task:""})


  // input içerisindeki değer değiştiğinde inputa girilen veriyi todo state'i içerisinde atmak için
  const changeInput = (e) => {
    setTodo({...todo, task:e.target.value})
  }

  // inputa girilen todo değerinin submit işlemi sonrası todos dizisi içerisine atılmasını sağlıyor
  const formSubmit = (e) => {
    e.preventDefault()
    if(todo.task !== ""){
      setTodos([...todos,todo])
    }
    setTodo({...todo,task:""})
  }

  // input alanının kodu
  return (    
        <form onSubmit={formSubmit} action="">
          <div className="input-area">
            <input className="task-input" value={todo.task} type="text" name="todo-input" onChange={changeInput} placeholder="Give the task" autoFocus required/>
            <button>Add</button>
          </div>
          
        </form>      
    
  )
}
export default Input