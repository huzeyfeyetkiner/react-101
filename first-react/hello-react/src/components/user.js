

//props parametresi ile oluşturduğumuz componente verdiğimiz propertieslere erişebiliyoruz
// function User(props){
//     return(
//         <h1>{props.isLoggedIn ? `${props.name}` : `Giriş yapmadınız`}</h1>
//     )
   
// }   

// yukarıdaki kullanımdan farklı olarak props parametresi bize obje döndürdüğünden obje içerisindeki elemanlara aşağıdaki gibi de erişebiliriz.
function User({name, surName, age, isLoggedIn}){
    return(
        <h1>{isLoggedIn ? `${name} ${surName} ${age}` : `Giriş yapmadınız`}</h1>
    )
   
}  

export default User