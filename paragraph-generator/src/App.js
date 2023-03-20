import { useState } from "react";
import Paragraph from "./components/Paragraph";
import text from "./data";

function App() {

  const [paragraphLength, setParagraphLength] = useState(1)
  const [paragraph, setParagraph] = useState([])

  const generate = () => {
    let amount = paragraphLength;
    if(amount <= 0) {
      amount = 1
    }if(amount >8){
      amount = 8
    }
    setParagraph(text.slice(0,amount))

    console.log(paragraph);
  }

  return (
    <div className="App">
      <h1>Tired of lorem ipsum?</h1>
      <div className="generator">
        <label htmlFor="number">Paragraph:</label>
        <input name="number" type="number" value={paragraphLength} onChange={(e) => setParagraphLength(e.target.value)} />
        <button onClick={generate}>Generate</button>
      </div>

      <div className="paragraph-container">
        {
          paragraph.map((text, index) => {
            return(
              <Paragraph key={index} text={text} />
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
