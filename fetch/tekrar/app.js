import fetch from "node-fetch";
import axios from "axios";



// const getData = () => {

//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(data => data.json())
//         .then(dataJson => {
//             console.log("User yüklendi",dataJson)

//             fetch("https://jsonplaceholder.typicode.com/posts/1")
//                 .then(data => data.json())
//                 .then(dataJson => console.log("Post 1 yüklendi",dataJson))

//         })

    
// }



// getData()

// const getData = async () => {

//     const users = await((await fetch("https://jsonplaceholder.typicode.com/users")).json())

//     return users
// }

// getData().then(data => console.log(data))


// (async ()=>{

//     const users = await((await fetch("https://jsonplaceholder.typicode.com/users")).json())

//     const post1 = await((await fetch("https://jsonplaceholder.typicode.com/posts/1")).json())


//     console.log("users yüklendi",users)
//     console.log("post1 yüklendi",post1)

// })()

// (async ()=>{

//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users")
//     const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1")

//     console.log("Users yüklendi",users)
//     console.log("Post1 yüklendi",post1)

// })()


const getUsers = () => {

    return new Promise(async (resolve,reject)=>{
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users")
        resolve(users)
        reject("Hata var 1")
    })

}

const getPost = (number) => {

    return new Promise(async (resolve,reject)=>{
        const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts/"+number)
        resolve(post)
        reject("Hata var 2")
    })

}


(async()=>{

    try{
        const users = await getUsers()
        const post = await getPost(4)


        console.log("users yüklendi",users)
        console.log("post yüklendi",post)
    }catch(e){
        console.log(e)
    }
    

})()
