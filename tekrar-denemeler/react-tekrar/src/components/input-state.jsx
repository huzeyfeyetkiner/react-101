import { useState } from "react";



function CopyInputArea(){

    const [text, setText] = useState({firstText:"" , secondtext:""})




    const change = (event) => {
       
        setText({...text, [event.target.name]: event.target.value})
    }

    return(
        <>
            <h1>Input State</h1>

            <input name="firstText" type="text" value={text.firstText} onChange={change} />

            <input name="secondtext" type="text" value={text.secondtext} onChange={change} />

            {
                <div>
                    {text.firstText}  {text.secondtext}
                </div>
            }

        </>
    )


}

export default CopyInputArea