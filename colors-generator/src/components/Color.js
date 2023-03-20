import {useState} from "react"

function Color({color, index}) {

    const [alert, setAlert] = useState(false)
    let textColor = index < 10 ? "black" : "white"

    const copyClipboard = ()=>{
        navigator.clipboard.writeText(`#${color.hex}`)
        setAlert(true)
        setInterval(() => {
            setAlert(false)
        },3000)
    }

  return (
    <div 
    className="color-container" 
    style={{backgroundColor: `#${color.hex}`}}
    onClick={copyClipboard}
    >

        <p style={{color:textColor
        }}>%{color.weight}</p>
        <p style={{color:textColor
        }}>#{color.hex}</p>

        {
            alert && <p style={{color:textColor}} className="alert">Coppied to Clipboard</p>
        }
    </div>
  )
}
export default Color