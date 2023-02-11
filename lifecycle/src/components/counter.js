import {useState, useEffect} from "react";



function Counter(){

    const [count, setCount] = useState(0)


    useState(()=> {

        

        const interval = setInterval(
            ()=> {
                setCount(c => c+1)
                console.log("Counter increasing");
            }
        ,1000)

        return () => clearInterval(interval) //buradaki return ifadesiyle componentin unmount(kaldırıldığını) olduğunu görebiliyoruz. clearInterval fonksyionu ise bize her saniye yaptığımız arttırma işlemini durdurmayı sağlıyor
    },[count])

    // Bir component unmount olduğunda componenti tekrar güncellemeye çalışacak olan işlemleri durdurmalıyız.

    return(
        <>            
            <h1>{count}</h1>
            {/* <button onClick={() => setCount(count+1)}>Increase</button> */}
        </>
    )
}

export default Counter