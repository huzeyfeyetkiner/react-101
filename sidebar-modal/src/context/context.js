import { createContext, useContext, useState } from "react";
import { links, social } from "../data.js";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

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

export const useSidebar = () => useContext(SidebarContext);
