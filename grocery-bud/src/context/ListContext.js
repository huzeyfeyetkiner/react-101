import {useContext, createContext, useState} from "react"

const ListContext = createContext()

export function ListProvider({children}) {

    const [list, setList] = useState([])
    const [edit, setEdit] = useState(false)
    const [editID, setEditID] = useState(null)

    const values = {
        list,
        setList,
        edit,
        setEdit,
        editID,
        setEditID
    }

    return(
        <ListContext.Provider value={values}>
            {children}
        </ListContext.Provider>
    )
}


export const useList = () => {
    return useContext(ListContext)
}

// export default ListProvider;