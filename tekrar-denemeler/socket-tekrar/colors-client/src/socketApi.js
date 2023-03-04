import io from "socket.io-client"

let socket;

export const init = () => {

    console.log("Backend ile bağlantı kuruluyor...");

    socket = io("http://localhost:3001", {
        transports: ["websocket"]
    })

    socket.on("connect", () => console.log("Bağlantı Kuruldu!"))
}

export const send = (color) => {
    socket.emit("newColor", color)
}

export const subscribe = (callBack) => {
    socket.on("receive", (color) => {
        console.log(color);
        callBack(color)
    })
}