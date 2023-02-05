



// promise yapısı resolve ve reject olmak üzere iki parametre bekliyor
// resolve parametresi herhangi bir sorun olmadığı taktirde döndürülmesi gereken değeri alırken reject parametresi sorun olduğu taktirde döndürülmesi gereken değeri alıyor
// then() kısmında resolve ile dönen değer/veri geri dönerken catch() kısmında hata olduğu taktirde dönecek veri/değer duruyor

// promise ilse dizi, değişken, obje, string ifade... döndürülebilir.

// const getComments = (number) => {
//     return new Promise((resolve,reject) =>{
//         if(number === 1){
//             resolve({user:"Huzeyfe"})
//         }

//         reject("There is a problem!")
//     });
// }

// getComments(1)
//     .then(data => console.log(data))
//     .catch(data => console.log(data))


import axios from "axios"

const getUsers = () => {
    return new Promise(async (resolve,reject)=>{
        const { data } = await axios("https://jsonplaceholder.typicode.com/users")
        resolve(data)
        reject("There is an error")
    })
}

const getPost = (number) => {
    return new Promise(async (resolve,reject)=>{
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/"+number)
        // resolve(data)
        reject("There is an error")
    })
}

// (async ()=>{

//     try{
//         const users = await getUsers()
//         const post1 = await getPost(1)
//         const post2 = await getPost(2)

//         console.log(users)
//         console.log(post1)
//         console.log(post2)
//     }catch(e){
//         console.log(e)
//     }   
    
// })()



// tüm promise yapılarını sıralı bir şekilde elde etmek için yukarıdaki gibi async bir fonksyion oluşturmak yerine kullanılabilecek yöntem.
Promise.all([getUsers(),getPost(1)])
    .then(console.log)
    .catch(console.log)


