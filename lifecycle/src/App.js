import { useEffect, useState } from "react";
// useState hook'nda olduğu gibi useEffect hook da react ile çağrılır.

import Counter from "./components/counter";

function App() {

  const [isVisible, setIsVisible] = useState(true)
  const [num, setNum] = useState(0)
  const [name, setName] = useState("Huzeyfe")

  useEffect(()=>{
    console.log("num rendered");
  },[num]) // dependencie array parameter olarak " [state] " gönderdiğimizde componentte ilgili state render/re-render edildiğinde çalışır

  useEffect(()=>{
    console.log("name rendered");
  },[name]) // dependencie array parameter olarak " [state] " gönderdiğimizde componentte ilgili state render/re-render edildiğinde çalışır


  useEffect(()=>{
    console.log("hmm rendered");
  },[name,num]) // dependencie array parameter olarak " [state, state1] " gönderdiğimizde componentte ilgili statelerden herhangi biri render/re-render edildiğinde çalışır

  useEffect(() => {
    console.log("Both rendered");
  },[]) // dependencie array parameter olarak " [] " gönderdiğimizde componentin ilk render işleminde içerideki fonksiyon çalışır

  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={() => {setNum(num + 1)}}>Increase</button>

      <hr />


      <h1>{name}</h1>
      <button onClick={() => {setName("Yetkiner")}}>Change</button>


      <hr />

      <h1>Component Unmount / useEffect</h1>

      {isVisible && <Counter />}
      <button onClick={() => setIsVisible(!isVisible)}>Hide component</button>

    </div>
  );
}

export default App;
