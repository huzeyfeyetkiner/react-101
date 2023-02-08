import propTypes from "prop-types";

//props parametresi ile oluşturduğumuz componente verdiğimiz propertieslere erişebiliyoruz
// function User(props){
//     return(
//         <h1>{props.isLoggedIn ? `${props.name}` : `Giriş yapmadınız`}</h1>
//     )
   
// }   

// yukarıdaki kullanımdan farklı olarak props parametresi bize obje döndürdüğünden obje içerisindeki elemanlara aşağıdaki gibi de erişebiliriz.
function User({name, surName, age, isLoggedIn, friends, address}){

    if(!isLoggedIn){
        return <h1>Giriş Yapmadınız</h1>
    }

    return(
        <>
            <h1>{isLoggedIn ? `${name} ${surName} ${age}` : `Giriş yapmadınız`}</h1>
            
            <p>{address.title} {address.zip}</p>
            

            {/* liste obje gibi döngüye sokmamız gereken propların unique key propları olmak zorunda aksi halde console ekranı üzerinde hatayla karşlılaşıyoruz  */}
            {
                friends.map(friend => <div key={friend.id}>{friend.name}</div>)
            }          
            
            
        </>
        
    )
   
}  


// prop type özelliği sayesinde componentime gelen propların hangi veri türüne sahip olduğunu belirtiriz
User.propTypes = {
    name: propTypes.string.isRequired, //isRequired ile beraber name propunun gönderilmesinin zorunlu olduğu belirtilir
    surName: propTypes.string,
    age: propTypes.oneOfType([propTypes.number, propTypes.string]), // oneOfType anahtar sözcüğüyle propla gönderilen verinin farklı türleri kabul etmesi sağlanır
    friends: propTypes.array,
    address: propTypes.shape({ //obje içerisinde birden fazla değer tutulduğu için her bir değerin proptype'nı belirtmek için kullanılır
        title: propTypes.string,
        zip: propTypes.number,
    })
}
// herhangi bir veri yollanmadığı taktirde defaultProps ile beraber proplara varsayılan değerler atayabiliyoruz.
User.defaultProps = {
    isLoggedIn: false
}

export default User