import Header from "./header"
import Button from "./button"
import Profile from "./profile"
import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function Container() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`container ${theme === "dark" ? "dark" : ""}`}>
        <Header />
        <hr />
        <Button />
        <hr />
        <Profile />
    </div>
  )
}
export default Container