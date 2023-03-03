import { useNotes } from "../context/NoteContext"
import { useEffect, useState } from "react"

function Head() {

    const [note, setNote] = useState("")
    const { notes, setNotes } = useNotes()

    const addSticky = () => {
      setNotes([...notes,note])
    }

    useEffect(() => {
      console.log(notes);
    },[notes])

  return (
    <div className="input-area">
        <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
        <button onClick={addSticky}>Add</button>
    </div>
  )
}
export default Head