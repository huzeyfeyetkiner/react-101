import { useState, useMemo } from 'react';
import './App.css';
import Header from './Components/header';
import Counter from './Components/counter';

function App() {

  // const data = {name:"Huzeyfe"}
  // yukarıdaki gibi bir kullanımda app propu re-render edildiğinde obje adresi her seferinde değişecek

  // useMemo ile beraber yukarıdaki gibi component her re-render olduğunda obje adresinin değişmesini engelleyebiliriz.
  // dependencies array içerisine bir state girdiğimiz taktirde o state üzerinde herhangi bir değişiklik olduğunda obje adresinin değişmesini sağlayarak ilgili component/componentların re-render edilmesini de sağlayabiliriz.
  
  // useMemo genellikle arraylar ve objeler için kullanılıyor

  const [num, setNum] = useState(0)
  const [text, setText] = useState("")

  const data = useMemo(() => {
    getObject();
  }, [num])
  // sadece num state'i değiştiği zaman obje yeniden yüklenecek ve objeye bağlı componentlar re-render edilecek

  return (
    <div className="App">
      <Header number={num < 5 ? 0 : num} data={data}/>
      <hr />
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Increase</button>
      <br />
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

      <hr /><hr /><hr />

      
      <Counter />


    </div>


  );
}


// örneğin bizim objemizi elde etmek için uzun süreli işlemlerden geçmemiz gerekiyor. Bu nedenle bu objenin component içerisindeki her state değişikliğinde yeni bir adrese gönderilmesini ve re-render işlemine maruz kalmasını istemiyorum, objenin değişmesi gereken durumları useMemo ile belirleyebiliyorum
// useMemonun kullanım mantığını anlamak için tanımlanmış fonksiyon
function getObject() {
  console.log("Loading...")
  for(let i=0;i<10000000;i++){}
  console.log("Loading Completed")

  return {name:"Huzeyfe"}
}

export default App;
