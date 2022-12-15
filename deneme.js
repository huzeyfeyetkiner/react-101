// setTimeout(() => {
//     console.log("merhaba");
// }, 2000);


// setInterval(() => {
//     console.log("huzo");
// }, 2000);


// const sayHi = (cb) => {
//     cb();
// }


// sayHi(()=>{
//     console.log("Hello");
// });

// import fetch from "node-fetch";
import axios from "axios"; //fetch yerine axios yazılıp jsonlar siliniyor.

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then(users => {
//     console.log("Users Yüklendi!",users);
    
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data) => data.json())
//     .then((post => console.log("Post Yüklendi",post)));
// })
//then işlemleri sıraya koyuyor!

(async () => {

    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    // const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");
    // const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");



    console.log("users",data);
    // console.log("post1",post1);
    // console.log("post2",post2);

})();



