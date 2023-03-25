import { links, social } from "../data";
import { FaBars } from "react-icons/fa";
import logo from "../logo.svg";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const linksContainerRef = useRef(null); //links listesini içeren dive ulaşmak için kullanılan ref
  const linksRef = useRef(null); // link listesini içeren dive ulaşmak için kullanılan ref

  //   toggle state'ini değiştirmek için kullanılan fonksiyon
  const toggleLinks = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    // listedeki elemanlara göre listenin height özelliğini öğreniyoruz
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (toggle) {
      // toggle true döndürdüğünde navbardaki linkleri görünür kılıyoruz.
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      // toggle false iken links listesini içeren divin gözükmemesi için height özelliğini 0px
      linksContainerRef.current.style.height = "0px";
    }
  }, [toggle]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
