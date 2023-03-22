import {useContext, createContext, useState} from "react"

const ListContext = createContext()

export function ListProvider({children}) {

    const [list, setList] = useState([]) // grocery listemizi tutmak için kullanılacak state
    const [edit, setEdit] = useState(false) //edit yapılacak mı diye kontrol sağlayan state.
    const [editID, setEditID] = useState(null) //edit yapılacaksa hangi iteme edit yapılacağını belirleyen state.

    // provider ile beraber children componentlere gönderilecek değerler
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

// context içerisindeki değerleri componentler içerisinden daha kolay çağırmak için yazılmış custom hook
export const useList = () => {
    return useContext(ListContext)
}
