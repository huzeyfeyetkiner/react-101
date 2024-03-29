// import logo from './logo.svg';
import './App.css';
import Header from "./components/header.js";
import User from "./components/user.js"


// const name = "Huzeyfe"
// const surName = "Yetkiner"
// const isLoggedIn = false


const friends = [
  {
    id:1,
    name:"Burak"
  },
  {
    id:2,
    name:"Muhammet"
  },
  {
    id:3,
    name:"Samet"
  },
]

const address = {
  title: "Eyüp/İstanbul",
  zip : 34050
}

function App() {
  return (
    // kapsayıcı div olmaması durumunda proje çalıştırılırken syntax hatası alınır. bu hatanın önüne geçmek için (<></>) fragment yapısı kullanılır
    <> 
      <h1>Hello React</h1>
      <Header />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique repudiandae laboriosam quas ipsum non quis illum corrupti amet explicabo sit, quae quam autem debitis minus, odio quo consequuntur. Laudantium.</p>
      {/* 
        özel tanımlı keywordler jsx içerisinde yazılamaz
        örneğin aşağıdaki örnekte for yerine htmlFor class yerine className yazıldı çünkü for ve class keywordleri js için özel tanımlıdırlar
      */}
      <label htmlFor="userName">Name</label> 
      <input type="text" id="userName" className="qwe"/>

      {/* değişken yazma */}
      {/* <h1>{name} {surName}</h1> */}
      {/* <h1>{`Benim adım ${name}, soyadım ${surName}`}</h1> */}

      {/* koşullu değişken render işlemi */}
      {/* <h1>{ isLoggedIn ? `Benim adım ${name}, soyadım ${surName}`:"giriş yapmadınız"}</h1> */}

      <User 
      name="Furkan" 
      surName ="Yetkiner" 
      age={"21"} 
      // isLoggedIn={true} 
      friends={friends} 
      address={address}>        
      </User>
    </>
  );
}

export default App;
