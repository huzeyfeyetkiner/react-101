import { io } from "socket.io-client"

let socket;
export const init = () => {

    console.log("Connecting");
    socket = io("http://localhost:3000", {
        transports:["websocket"]
    })
    


    socket.on("connect", () => {
        console.log("Connected!");
    })
}

export const sendMessage = (message) => {
    if(!socket) return

    socket.emit("new-message", message)
}

export const subMessage = (cb) => {
    if(!socket) return

    socket.on("receive-message", (message) => {
        console.log("new message",message);
        cb(message)
    })
}

export const subMessageList = (cb) => {
    if(!socket) return

    socket.on("message-list", (messages) => {
        cb(messages)
    })

}