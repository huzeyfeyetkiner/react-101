import { FaBars } from "react-icons/fa";
import { useAppContext } from "../context";
import logo from "../images/logo.svg";
function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useAppContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent; // navbardaki menüde bulunan texti almak için (products, developers, company)

    const temp = e.target.getBoundingClientRect(); // ilgili navbar elementinin lokasyonun ulaşmak için

    const center = (temp.right + temp.left) / 2; // ilgili nav elementinin ortası
    const bottom = temp.bottom - 3; // ilgili nav elementinin altı

    openSubmenu(page, { center, bottom }); // hover olduğu durumda submenuyü visible yapacak olan fonksiyon
  };

  // hideSubmenu fonksiyonu sayesinde nav içersinde bulunan ve link-btn classına sahip olmayan elemanlar üzerine gelindiğinde closeSubMenu fonksiyonunu çağırarak submenuleri görünmez hale getiriyoruz.
  const hideSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={hideSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>
  );
}
export default Navbar;
