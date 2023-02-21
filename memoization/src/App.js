import { useState } from 'react';
import './App.css';
import Header from './Components/header';
import React from "react";

function App() {

  const [num, setNum] = useState(0)

  return (
    <div className="App">
      <Header number={num < 5 ? 0 : num}/>
      <hr />
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Increase</button>
    </div>
  );
}

export default App;
