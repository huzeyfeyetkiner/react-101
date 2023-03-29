import React, { useState, useRef, useEffect } from "react";
import { useAppContext } from "../context";

function Submenu() {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useAppContext();

  const container = useRef(null); //submenunun divine doğrudan ulaşarak lokasyonunu ayarlamak için kullanılan ref

  const [col, setCols] = useState("col-2");

  useEffect(() => {
    setCols("col-2");
    const submenu = container.current;
    const { center, bottom } = location;

    submenu.style.left = `${center}px`; //inlince css for submenu
    submenu.style.top = `${bottom}px`; //inlince css for submenu

    if (links.length === 3) {
      setCols("col-3");
    }
    if (links.length > 3) {
      setCols("col-4");
    }
  }, [location, links]);
  // location değeri her değiştiğinde submenu divinin lokasyonunu o değere göre uyarlamak için kullanılan useEffect

  return (
    <aside
      ref={container}
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${col}`}>
        {links.map((link, index) => {
          return (
            <a key={index} href={link.url}>
              {link.icon} {link.label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
export default Submenu;
