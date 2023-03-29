import { FaBars } from "react-icons/fa";
import { useAppContext } from "../context";
import logo from "../images/logo.svg";
function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useAppContext();

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn">products</button>
          </li>
          <li>
            <button className="link-btn">developers</button>
          </li>
          <li>
            <button className="link-btn">company</button>
          </li>
        </ul>
        <button className="btn sigin-btn">Sign In</button>
      </div>
    </nav>
  );
}
export default Navbar;
