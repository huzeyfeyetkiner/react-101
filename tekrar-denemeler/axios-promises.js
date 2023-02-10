

import axios from "axios";
import fetch from "node-fetch"



const getUser = (id) => {
    return new Promise(async(resolve,reject)=> {
        const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/"+id)

        resolve(user)
        reject("Hata var!")
    })
}

(async()=>{

    try{
        const userData = await getUser(2)
        console.log(userData)
    }catch(err){
        console.log(err)
    }
    
})()


// (async() =>{
//     const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/")

//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1")

//     const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2")


//     console.log("Users yüklendi",user)
//     console.log("Post1 yüklendi",post1)
//     console.log("Post2 yüklendi",post2)


// })()


// (async()=>{

//     const user =  await ((await fetch("https://jsonplaceholder.typicode.com/users/")).json())

//     console.log(user)    

// })()