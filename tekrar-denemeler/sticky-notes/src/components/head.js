import { useNotes } from "../context/NoteContext"
import { useState } from "react"
import React from "react"

function Head() {

    const [note, setNote] = useState("")
    const { notes, setNotes } = useNotes()

    const addSticky = (e) => {
      e.preventDefault()
      setNotes([...notes,note])
      setNote("")
    }


  return (
    <div className="input-area">
      <form onSubmit={addSticky}>
        <input type="text" value={note} onChange={(e) => setNote(e.target.value)} required/>
        <button>Add</button>
      </form>
       
    </div>
  )
}
export default React.memo(Head)