import ChatForm from "./ChatForm"
import ChatList from "./ChatList"
import { init, subChat, subMessageList } from "../socketApi"
import { useEffect } from "react"
import { useChat } from "../context/ChatContext"

function Container() {

  const { setMessages } = useChat()

  useEffect(() => {
    init()
    subChat((message) => {
      setMessages((prevState) => [...prevState, {message}])
    })

    subMessageList((messages) => {
      setMessages(messages)
    })

  }, [])  


  return (
    <div className="container">
        <ChatList />
        <ChatForm />
    </div>
  )
}
export default Container