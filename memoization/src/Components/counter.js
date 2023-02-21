import { useCallback, useState } from "react"
import Footer from "./footer"

function Counter() {
  const [num,setNum] = useState(0)

  // useCallback ile beraber child component içerisinde gönderilen bu fonksiyonun, dizinindeki componentlar değiştiği taktirde tekrar tekrar farklı adreslerle child component içerisinde gönderilmesini engelledik ve buradaki örnekte footer elementinin re-render edilmesinden kurtulduk.
  const increase = useCallback(() => {
    setNum(prevState => prevState + 1)
  }, [])

  return (
    <div>
        <h1>{num}</h1>

        <Footer increase={increase}/>
    </div>
  )
}
export default Counter