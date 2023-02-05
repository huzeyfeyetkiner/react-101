
import axios from "axios"

// export const getData = async (num) => {    
    
//     const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/"+num)
//     const { data: post } = await axios("http://jsonplaceholder.typicode.com/posts?userId="+num)
   
    
//     return {user , post}
// }



const getUser = (num) => {
    return new Promise(async (resolve, reject)=> {
        const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/"+num)

        resolve(user)
    })
}

const getPosts = (num) => {
    return new Promise(async (resolve, reject)=> {
        const { data: post } = await axios("http://jsonplaceholder.typicode.com/posts?userId="+num)

        resolve(post)
    })
}

export const getData = async (num) => {

    try{
        const user = await getUser(num)
        const posts = await getPosts(num)
        const array = [user, posts]
        return array
    }catch(e){
        console.log(e)
    }
    
}

