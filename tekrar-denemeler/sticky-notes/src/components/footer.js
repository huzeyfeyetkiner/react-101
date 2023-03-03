import { useEffect, useState } from "react"
import { useNotes } from "../context/NoteContext"

function Footer() {

    const {notes} = useNotes()

    const [noteLen, setNoteLen] = useState(notes.length)

    useEffect(() => {
        setNoteLen(notes.length)
    }, [notes])

  return (
    <div className="footer">
        {noteLen}
    </div>
  )
}
export default Footer