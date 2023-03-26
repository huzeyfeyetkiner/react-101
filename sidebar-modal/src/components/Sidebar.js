import logo from "../logo.svg";
import { FaTimes } from "react-icons/fa";
import { useSidebar } from "../context/context";

function Sidebar() {
  const { links, social, showSidebar, setShowSidebar } = useSidebar();

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div className={`sidebar ${showSidebar ? "show-sidebar" : ""}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo-img" />
        <button className="close-sidebar" onClick={handleCloseSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="sidebar-list">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon} {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-list">
        {social.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.url}>{item.icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Sidebar;
