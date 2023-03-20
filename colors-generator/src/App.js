import {useState, useEffect} from "react"
import Values from "values.js"

import './App.css';
import Color from "./components/Color";

function App() {
  const [value, setValue] = useState("#881616")
  const [colors, setColors] = useState([])
  const [error, setError] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    try{
      let color = new Values(value);
      setColors(color.all(10))
      console.log(colors);
    }catch(e) {
      console.log(e);
      setError(true)
    }   
  }

  useEffect(() => {
      let color = new Values("#881616");
      setColors(color.all(10))
      console.log(colors);      
  }, [])

  return (
    <div className="App">
      <div className="generator">

        <h2>Color Generator</h2>

        <form onSubmit={handleSubmit}>

          <input className="colorInput" type="color" name="" id="" value={value} onChange={(e) => setValue(e.target.value)}/>

          <input className="textInput" type="text" value={value} onChange={(e) => setValue(e.target.value)} style={{border: error ? "1px solid red" : ""}}/>

          <button style={{backgroundColor: value}} type="submit">Submit</button>
        </form>
      </div>

      <div className="colors-container">
        {
          colors.map((color,index) => {
            return (
              <Color key={index} color={color} index={index}/>
            )
          })
        }
      </div>
      
    </div>
  );
}

export default App;
