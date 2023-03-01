import io from "socket.io-client";
// backend ile bağlantı kurmak için socket.io-client modülü kuruldu

let socket;

// init fonksiyonu ile beraber backend ile bağlantı kuruldu
export const init = () => {

    console.log("sunucuya bağlanılıyor...");

    // backend ile bağlantı kurulmasını sağlayan kod bloğu
    socket = io("http://localhost:3001", {
        transports: ["websocket"]
    })

    // bağlantı kurulduğu anı yakalamak için kullanılan kod bloğu
    socket.on("connect", () => {
        console.log("Sunucuya bağlanıldı");
    })
}

// backend içerisine veri göndermek için kullanılan kod bloğu
export const send = (color) => {
    socket.emit("newColor", color)
}

// backend içerisine gönderilen veriyi kullanmamızı sağlayan kod bloğu
export const subscribe =  (callBackFunc) => {
    socket.on("receive", (color) => {
        console.log(color);
        callBackFunc(color)
    })
}