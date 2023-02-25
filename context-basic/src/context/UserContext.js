import { createContext, useContext, useState } from "react";

const UserContext = createContext() 



export const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const values = {user, setUser}

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

// custom context hook kuruyoruz bu sayede theme context içerisinde yaptığımızın aksine useContext hookunu ve UserContexti her kullanmak istediğimizde çağırmamız gerekmiyor. Oluşturduğumuz hook sayesinde contextimize ulaşabiliyoruz.
export const useUser = () => useContext(UserContext)

