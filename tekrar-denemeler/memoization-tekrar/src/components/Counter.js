import { useCallback, useMemo, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"

function Counter() {

    const [number, setNumber] = useState(0)

    // useCallback fonksiyonlar için kullanılabilir
    const increase = useCallback(() => {
      setNumber ((prev) => prev + 1)
    }, [])
    
    // useMemo referans tipinde tutulan tüm veri türleri için kullanılabilir
    const titleObj = useMemo(() => {
      return {
        id: 1,
        title: "Counter Uygulaması 1"
      }
    }, [] )   

  return (
    <div>

        <Header titleObj = {titleObj} />
        
        <hr />        

        <h2>{number}</h2>

        <hr />

        <Footer increase={increase}/>

    </div>
  )
}
export default Counter