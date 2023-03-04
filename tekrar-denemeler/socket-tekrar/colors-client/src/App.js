import { init, send, subscribe } from './socketApi';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [color, setColor] = useState("#f0f0f0")

  const [activeColor, setActiveColor] = useState("#282c34")

  useEffect(() => {
    init()

    subscribe((color) => {
      setActiveColor(color)
    })

  }, [])

  return (
    <div className="App" style={{backgroundColor:activeColor}}>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
      <button onClick={() => send(color)}>Change Color</button>
    </div>
  );
}

export default App;
