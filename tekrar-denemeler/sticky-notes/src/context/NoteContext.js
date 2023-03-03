import { createContext, useContext, useState } from "react";

const NotesContext = createContext()

export const NotesProvider = ({children}) => {

    
    const [notes, setNotes] = useState([])

    const values = {
        notes,
        setNotes,
    }

    return (
        <NotesContext.Provider value={values}>
            {children}
        </NotesContext.Provider>
    )
}



export const useNotes = () => {
    return useContext(NotesContext)
}