import { useNotes } from "../context/NoteContext"



function Notes() {

    const { notes, setNotes } = useNotes()

  return (
    <div className="notes-container">
        <ul>
            {
                notes.map((note, index) => {
                    return(
                        <li key={index}>
                            <button onClick={() => {
                                const tra = [...notes]
                                tra.splice(index,1)
                                setNotes(tra)
                            }}>X</button>
                            <span>{note}</span>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
export default Notes