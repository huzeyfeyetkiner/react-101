

// fetch yapısından farklı olarak gelen datayı json ile dönüştürmemiz gerekmiyor.


import axios from "axios";

(async ()=>{

    const {data : users} = await axios("https://jsonplaceholder.typicode.com/users")

    const {data : post1} = await axios("https://jsonplaceholder.typicode.com/posts/1")

    const {data : post2} = await axios("https://jsonplaceholder.typicode.com/posts/2")



    console.log("Users yüklendi ",users)
    console.log("Post1 yüklendi ",post1)
    console.log("Post2 yüklendi ",post2)

})();