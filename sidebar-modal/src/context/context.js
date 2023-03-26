import { createContext, useContext } from "react";
import { links, social } from "../data.js";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const values = {
    links,
    social,
  };

  return (
    <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
