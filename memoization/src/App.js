import { useState } from 'react';
import './App.css';
import Header from './Components/header';
import {useMemo} from "react";

function App() {

  // const data = {name:"Huzeyfe"}
  // yukarıdaki gibi bir kullanımda app propu re-render edildiğinde obje adresi her seferinde değişecek

  // useMemo ile beraber yukarıdaki gibi component her re-render olduğunda obje adresinin değişmesini engelleyebiliriz.
  // dependencies array içerisine bir state girdiğimiz taktirde o state üzerinde herhangi bir değişiklik olduğunda obje adresinin değişmesini sağlayarak ilgili component/componentların re-render edilmesini de sağlayabiliriz.
  const data = useMemo(() => {
    return {name: "Huzeyfe"}
  }, [])

  // const data = useMemo(() => {
  //   return {name: "Huzeyfe"}
  // }, [num]) yorum satırı içerisindeki gibi bir kullanım söz konusu olduğunda num içerisindeki veri her değiştiğinde objemizin referans adreside değişikliğe uğrayacağından ilgili componentler re-render edilecek

  const [num, setNum] = useState(0)

  return (
    <div className="App">
      <Header number={num < 5 ? 0 : num} data={data}/>
      <hr />
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Increase</button>
    </div>
  );
}

export default App;
