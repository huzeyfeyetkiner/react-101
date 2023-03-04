import { createContext, useContext, useState } from "react";

const NotesContext = createContext()

export const NotesProvider = ({children}) => {

    
    const [notes, setNotes] = useState(["HTML is the standard markup language for Web pages. With HTML you can create your own Website","CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.","JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn."])

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