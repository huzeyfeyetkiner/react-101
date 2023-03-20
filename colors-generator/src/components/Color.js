function Color({color, index}) {

    let textColor = index < 10 ? "black" : "white"

  return (
    <div className="color-container" style={{backgroundColor: `#${color.hex}`}}>

        <p style={{color:textColor
        }}>%{color.weight}</p>
        <p style={{color:textColor
        }}>#{color.hex}</p>

    </div>
  )
}
export default Color