import style from "./style.module.css"
import { useChat } from "../context/ChatContext"
import { useState } from "react"
import { sendMessage } from "../socketApi"

function ChatForm() {

  const [message, setMessage] = useState("")
  const {setMessages} = useChat()

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message)
    setMessages((prevState) => [...prevState, {message, fromMe: true}])
    setMessage("")
    
  }


  // console.log(message);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" value={message}
        className={style.textInput} 
        onChange={(e) => {
          setMessage(e.target.value)
        }}/>
      </form>
    </div>
  )
}
export default ChatForm