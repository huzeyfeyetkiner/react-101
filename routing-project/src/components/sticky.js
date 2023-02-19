import { useState } from "react"


function Sticky() {

  const [stickyNotes, setStickyNotes] = useState(["React a JavaScript library for building user interfaces", "HTML is the standard markup language for Web pages.", "CSS describes how HTML elements should be displayed.", " jQuery is a fast, small, and feature-rich JavaScript library."])

  const [note, setNote] = useState("")

  console.log(note);
  return (
    
    <div className="sticky">
      <div className="sticky-container">
        <form action="">
          <input type="text" name="" id="" value={note} onChange={(e) => {setNote(e.target.value)}}/>
        </form>
        <div className="sticky-notes">
          <ul>
            {
              stickyNotes.map((note,index) => {
                return(
                  <li key={index}>
                    <div 
                    className="note-layout">
                      <button className="stick-del">X</button>
                      
                      {note}</div>
                  </li>
                )
                
              })
            }
          </ul>
        </div>
      </div>
    </div>

  )
}
export default Sticky