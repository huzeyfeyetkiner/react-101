import { useState, useEffect } from "react"

function Header({todos,setTodos}) {

  // input ile girilecek görevi tutmak ve daha sonrasında prop olarak alınan todos içine atmak için kullanılan state
  const [todo,setTodo] = useState({completed:false,task:""})

  // input içerisinde yapılan herhangi bir değişiklikte yukarıda tanımlanan state içerisindeki objenin task öğesine inputa girilen değeri atmak için yazılan fonksiyon
  const onChangeInput = (e) =>{
    setTodo({completed:false, task:e.target.value})
  }

  // girilen görevin prop olarak alınan todos içerisine eklenmesini sağlayan fonksiyon (todos içerisinde app.js içerisinde önceden yazılmış görevler hali hazırda bulunmakta)
  const formSubmit = (e) => {
    e.preventDefault()
    if(todo.task != ""){
      setTodos([...todos,todo])
    }
  }

  // todos arrayi üzerinde bir değişiklik todo objesindeki task değişkenini sıfırlıyoruz, bu sayede input değerimiz yeni bir değer girildikten sonra temizleniyor
  useEffect(() => {
    setTodo( {completed:false,task:""} )
  },[todos])

  return (  
    <div className="main">
      <form onSubmit={formSubmit} action="">
        <input id="deneme" className="new-todo" placeholder="What needs to be done?" type="text"  onChange={onChangeInput} value={todo.task} autoFocus required/>
      </form>
      
      
    </div>
    


  )
}
export default Header