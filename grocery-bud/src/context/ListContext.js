import {useContext, createContext, useState, useEffect} from "react"

const ListContext = createContext()

export function ListProvider({children}) {

    const local = localStorage.getItem("list")

    const [list, setList] = useState(local ? JSON.parse(local) : []) // grocery listemizi tutmak için kullanılacak state
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

    //list her değiştiğinde localstorage üzerinde tutulan veri güncelleniyor
    useEffect(() => {
        localStorage.setItem("list",JSON.stringify(list))
    },[list])

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
