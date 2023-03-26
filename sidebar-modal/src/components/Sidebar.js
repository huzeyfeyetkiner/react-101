import logo from "../logo.svg";
import { FaTimes } from "react-icons/fa";
import { useSidebar } from "../context/context";

function Sidebar() {
  const { links, social } = useSidebar();

  return (
    <div className={`sidebar show-sidebar`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo-img" />
        <button className="close-sidebar">
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
