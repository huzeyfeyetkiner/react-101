import { init, subscribe } from './socketApi';
import './App.css';
import Palette from './components/Palette';
import { useEffect, useState } from 'react';

function App() {

  const [activeColor, setActiveColor] = useState("#454545")

  useEffect(() => {
    init() //backend ile bağlantıyı kuracak fonksyion

    subscribe((color) => { //backend içerisinden veriyi alıp callback fonksiyon ile beraber ilgili veriyi kullanmamızı sağlayan fonksiyon
      setActiveColor(color)
    })
  },[])


  return (
    <div className="App" style={{backgroundColor:activeColor}}>
      <Palette activeColor={activeColor}/>
    </div>
  );
}

export default App;
