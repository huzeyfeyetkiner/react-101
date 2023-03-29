import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import { useAppContext } from "../context";

function Sidebar() {
  const { closeSidebar, isSidebarOpen } = useAppContext();

  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          {<FaTimes />}
        </button>
        {sublinks.map((item, index) => {
          const { links, page } = item;
          return (
            <article key={index}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map((item, index) => {
                  return (
                    <a href={item.url}>
                      {item.icon} {item.label}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
}
export default Sidebar;
