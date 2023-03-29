import React, { useContext, createContext, useState } from "react";
import sublinks from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); //sidebar'a toggle özelliği eklemek için kullanılan state

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); //submenulerin hover durumunda gösterilmesini sağlayan state

  const [location, setLocation] = useState({}); // submenu divinin hangi lokasyonda gözükeceğini hesaplamak için kullanılan state

  // navbardaki butonların üstüne gelindiği durumda submenı içeriğini değiştirmek için kullanılan state
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinate) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinate);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const values = {
    isSubmenuOpen,
    isSidebarOpen,
    openSubmenu,
    closeSubmenu,
    openSidebar,
    closeSidebar,
    location,
    page,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
