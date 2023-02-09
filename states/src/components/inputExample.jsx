import {useState} from "react";

function InputExample(){

    // const [name, setName] = useState("Huzeyfe")
    // const [surName, setSurname] = useState("Yetkiner")


    // const onChangeName = (e) => {
    //    setName(e.target.value)
    // }

    // const onChangeSurname = (e) => {
    //     setSurname(e.target.value)
    //  }


    const [userName, setUserName] = useState({name:"", surName:""})


    const onChangeObj = (e) => {
        setUserName({...userName, [e.target.name]: e.target.value})
    }

    return(
        <>
            <span>Name:</span>
            <input name="name" type="text" onChange={onChangeObj}  value={userName.name}/>


            <span>Name:</span>
            <input name="surName" type="text" onChange={onChangeObj}  value={userName.surName}/>
            <div>{userName.name} {userName.surName}</div>


        </>
    )
}

export default InputExample