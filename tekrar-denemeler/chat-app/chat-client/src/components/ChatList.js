import ChatItem from "./ChatItem"
import style from "./style.module.css"
import { useChat } from "../context/ChatContext"
import ScrollableFeed from 'react-scrollable-feed'

function ChatList() {

  const {messages} = useChat()

  return (
    <div className={style.chatlist}>      
      <ScrollableFeed>
        {
          messages.map((mes, key) => {
            return (
              <ChatItem key={key} message={mes} />
            )
          })
        }

      </ScrollableFeed>            
      
    </div>
  )
}
export default ChatList