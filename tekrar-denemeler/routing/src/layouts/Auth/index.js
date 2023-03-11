import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import "./style.css"

function AuthLayout() {
  return (
    <div className="auth-container">
        <div className="auth-menu">
          <Link to={"/auth"}>Giriş Yap</Link>
          <Link to={"/auth/register"}>Kayıt Ol</Link>
        </div>
        <hr />
        <Outlet/>
    </div>
  )
}
export default AuthLayout