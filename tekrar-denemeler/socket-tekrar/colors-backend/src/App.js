import './App.css';
import { init, send, subscribe } from './socketApi';
import { useEffect, useState } from "react" 

function App() {

  useEffect(() => {
    init()

    subscribe((color) => {
      setActiveColor(color)
    })
  },[])

  const [color, setColor] = useState("#0f0f0f")

  const [activeColor, setActiveColor] = useState("#282c34")

  return (
    <div className="App" style={{backgroundColor:activeColor}}>
      <input type="color" value={color} id="" onChange={(e) => setColor(e.target.value)}/>
      <button onClick={() => {
        send(color)
      }}>Change Color</button>   
      
    </div>
  );
}

export default App;
