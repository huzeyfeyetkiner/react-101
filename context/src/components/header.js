import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function Header() {

    const {theme, setTheme} = useContext(ThemeContext)
    // ThemeContext içerisinden gönderilen değerleri alıyoruz (bu senaryoda bu bir state)
  return (
    <div>
        <p>Header - {theme}</p>
        
        <button onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}>Change Theme</button>
        {/* context ile aldığımız state içerisindeki değeri değiştiriyoruz. Context içerisinden aldığımız için değişim ilgili componentlerin tümüne uygulanıyor */}
    </div>
  )
}
export default Header