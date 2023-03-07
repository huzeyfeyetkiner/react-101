import ChatList from "./ChatList"
import ChatForm from "./ChatForm"
import { useEffect } from "react"
import { init, subMessage, subMessageList } from "../socketApi"
import { useChat } from "../context/ChatContext"

function Container() {

  const {setMessages} = useChat()

  useEffect(() => {
    init()

    subMessage((message) => {
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