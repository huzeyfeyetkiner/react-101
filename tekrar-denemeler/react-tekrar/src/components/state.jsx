import { useState } from "react"


function Count(){

    const [num, setNum] = useState(0)

    return(
        <>
            <h1>Counter Example</h1>

            <h4>{num}</h4>

            <button onClick={() => setNum(num + 1)}>Increase</button>
            <button onClick={() => setNum(num - 1)}>Decrease</button>
        
        </>
    )
}

export default Count