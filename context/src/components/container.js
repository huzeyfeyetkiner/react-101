import Header from "./header"
import Button from "./button"
import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function Container() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`container ${theme === "dark" ? "dark" : ""}`}>
        <Header />
        <hr />
        <Button />
    </div>
  )
}
export default Container