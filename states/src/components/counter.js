import { useState } from "react";


// const increase = (num) => num+= 1
// const decrease = (num) => num-= 1


function Counter(){

    const [num, setNum] = useState(0)

    const increase = () => {
        setNum(num + 1)
    }
    const decrease = () => {
        setNum(num - 1)
    }

    return(

        <>  
            <h1>{num}</h1>
            <br />
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        
        </>


    )
}

export default Counter