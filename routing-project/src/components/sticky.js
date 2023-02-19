import { useState } from "react"


function Sticky() {

  const [stickyNotes, setStickyNotes] = useState(["React a JavaScript library for building user interfaces", "HTML is the standard markup language for Web pages.", "CSS describes how HTML elements should be displayed.", " jQuery is a fast, small, and feature-rich JavaScript library."])

  const [note, setNote] = useState("")

  function formSubmitted(e){
    e.preventDefault()
    setStickyNotes([...stickyNotes, note])
    setNote("")
  }
  return (
    
    <div className="sticky">
      <div className="sticky-container">
        <form action="" onSubmit={formSubmitted}>
          <input type="text" name="" id="" value={note} onChange={(e) => {setNote(e.target.value)}} autoFocus/>
        </form>
        <div className="sticky-notes">
          <ul>
            {
              stickyNotes.map((note,index) => {
                return(
                  <li key={index}>
                    <div 
                    className="note-layout">
                      <button className="stick-del" onClick={() => {
                        const newArray = stickyNotes;
                        newArray.splice(index,1)
                        setStickyNotes([...newArray])
                      }}>X</button>
                      
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