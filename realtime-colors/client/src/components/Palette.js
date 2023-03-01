import { init } from "../socketApi"
import { useEffect } from "react"

function Palette() {

  useEffect(() => {
    init()
  },[])
  return (
    <div className="palette">
        <input type="color" name="" id="" />
        <button>Click</button>
    </div>
  )
}
export default Palette