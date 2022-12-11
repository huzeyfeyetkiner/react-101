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

import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then(users => {
//     console.log("Users Yüklendi!",users);
    
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data) => data.json())
//     .then((post => console.log("Post Yüklendi",post)));
// })
//then işlemleri sıraya koyuyor!

async function getData(){
    
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const post2 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();




    console.log("users",users);
    console.log("post1",post1);
    console.log("post2",post2);

}



getData();