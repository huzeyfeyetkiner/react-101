import {  send } from "../socketApi"
import {  useState } from "react"

function Palette({activeColor}) {

  const [color, setColor] = useState("#000")
  // color inputundan gelen veriyi tutacak state

  return (
    <div className="palette">
      <h1>{activeColor}</h1>
        <input type="color" value={activeColor} onChange={(e) => setColor(e.target.value)}/>
        <button onClick={() => send(color)}>Click</button>
        {/* onClick fonksiyonu içerisindeki send fonksiyonu ile backende iligli veriyi gönderiyoruz. */}
    </div>
  )
}
export default Palette