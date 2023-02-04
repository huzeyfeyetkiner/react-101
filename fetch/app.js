import fetch from "node-fetch"


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((user) => {
//     console.log("users yüklendi",user)

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((post1) => post1.json())
//     .then((post1) => {
//         console.log("Post 1 yüklendi",post1)

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//         .then((post2) => post2.json())
//         .then((post2) => console.log("Post 2 yüklendi",post2))
//     }
//    )
// })


//yukarıdaki sıralı fetch işlemlerini daha okunabilir kılmak için async ve await fonksiyonlar kullanılabilir.
// async function getData() {
//     const users = await(
//         await fetch("https://jsonplaceholder.typicode.com/users")
//         ).json()
//     const post1 = await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         ).json()
//     const post2 = await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//         ).json()


//     console.log("Users yüklendi",users)
//     console.log("Post 1 yüklendi",post1);
//     console.log("Post 2 yüklendi",post2);
// }

// getData()


// anonim fonksyion ile beraber fonksiyonu çağırmadan program başlangıcında doğrudan çalıştırabiliyoruz.
( async ()=>{
    const users = await(
        await fetch("https://jsonplaceholder.typicode.com/users")
        ).json()
    const post1 = await(
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
        ).json()
    const post2 = await(
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
        ).json()


    console.log("Users yüklendi",users)
    console.log("Post 1 yüklendi",post1);
    console.log("Post 2 yüklendi",post2);
})();