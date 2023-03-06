import io from "socket.io-client"

let socket

export const init = () => {
    console.log("connecting...");
    socket = io("http://localhost:3000", {
        transports: ["websocket"]
    })


    socket.on("connect", () => {
        console.log("Connected");
    })
}

export const sendMessage = (message) => {
    if(socket){
        socket.emit("new-message", message)
    }
}

export const subChat = (callBackFunc) => {
    if(!socket) return;

    socket.on("receive-message", (message) => {
        console.log("Yeni mesaj var:",message);
        callBackFunc(message)
    })
}

export const subMessageList = (cb) => {
    if(!socket) return;

    socket.on("message-list", (messages) => {
        console.log("Past messages",messages);
        cb(messages)
    })
}