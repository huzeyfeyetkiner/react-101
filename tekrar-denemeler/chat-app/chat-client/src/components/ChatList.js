import ChatItem from "./ChatItem"
import style from "./style.module.css"

function ChatList() {
  return (
    <div className={style.chatlist}>
      <div>
        <ChatItem />
      </div>      
    </div>
  )
}
export default ChatList