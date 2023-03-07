import style from "./style.module.css"


function ChatItem({message}) {
  return (
    <div className={`${style.chatItem} ${message.fromMe ? style.right : ""}`}>{message.message}</div>
  )
}
export default ChatItem