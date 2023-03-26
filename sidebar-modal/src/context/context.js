import { createContext, useContext, useState } from "react";
import { links, social } from "../data.js"; // sidebar için lazım olan verilerin çekildiği modül

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false); //modal yapısını kapatıp açmak için kullanılacak state
  const [showSidebar, setShowSidebar] = useState(false); //sidebar yapısını kapatıp açmak için kullanılan state

  // chlid componentlere provide edilecek olan değerler
  const values = {
    links,
    social,
    showModal,
    setShowModal,
    showSidebar,
    setShowSidebar,
  };

  return (
    <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext); // contextin sağladığı verilere ulaşmak için componentler içerisinde kullanılacak custom hook
