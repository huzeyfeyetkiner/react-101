import { useState } from "react"
import { useList } from "../context/ListContext";


function Form() {

    // liste içerisine atılacak olan yazıyı tutmak için kullanılan state
    const [text, setText] = useState({completed: false, title:""})

    // context içerisinden çekilen stateler
    const {list, setList, edit, editID, setEdit} = useList()

    // listeye yeni bir eleman eklemek için yazılan fonksiyon
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.title){
          setList(prev => [...prev, text])
          setText({completed: false, title:""})
        }else {
          alert("Enter a valid value")
        }       
    }

    //liste içerisindeki bir elemanın yeniden düzenlenmesini sağlayan fonksiyon
    const handleEdit = (e) => {
      e.preventDefault()
      setEdit(false)
      if(text.title){
        const newArray = list;
        newArray[editID].title = text.title
        setList([...newArray])
        setText({completed: false, title:""})
      }
      // if bloğuyla beraber boş bir text ile editlenme işlemi yapılmasının önüne geçiliyor
      
    }    

  if(!edit) {
    //default durumda gösterilecek olan form ekranıyla listeye eleman eklenmesi sağlanıyor
    return (    
      <form className="form-container" onSubmit={handleSubmit}>
          <input 
          type="text" 
          value={text.title} 
          onChange={(e) => setText({...text, title:e.target.value})}
          />
          <button type="submit">Add Item</button>
      </form>
    )
  }
  else{ // edit state'i true olduğu anda form edit yapmamızı sağlayan handleEdit fonksiyonu ile çalışıyor
    return (
      // edit formunda bazı css farkları olması için editting classı eklendi
      <form className="form-container editting" onSubmit={handleEdit}>
          <input 
          type="text" 
          value={text.title} 
          onChange={(e) => setText({...text, title:e.target.value})}
          />
          <button type="submit">Edit Item</button> 
      </form>
    )
  }
  
}
export default Form