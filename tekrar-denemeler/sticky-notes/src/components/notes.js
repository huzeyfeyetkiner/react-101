import { useNotes } from "../context/NoteContext"



function Notes() {

    const { notes } = useNotes()

  return (
    <div className="notes-container">
        <ul>
            {
                notes.map((note, index) => {
                    return(
                        <li key={index}>
                            <div>{note}</div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
export default Notes