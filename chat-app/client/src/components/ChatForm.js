import styles from "./styles.module.css"
import {useState} from "react"
import { sendMessage } from "../socketApi"
import { useChat } from "../context/ChatContext"

function ChatForm() {

  const [message, setMessage] = useState("")
  const { setMessages } = useChat() 

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(message)
    setMessages((prevState) => [...prevState, {message, fromMe : true}])
    setMessage("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className={styles.textInput} value={message} onChange={(e) => setMessage(e.target.value)} />
      </form>
    </div>
  )
}
export default ChatForm