import React from "react";
import { FaBars } from "react-icons/fa";

import { useSidebar } from "../context/context";

function Home() {
  const { setShowModal, setShowSidebar } = useSidebar();

  const handleModalToggle = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleSidebarToggle = () => {
    setShowSidebar((prevState) => !prevState);
  };
  return (
    <div className="main">
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
        <FaBars />
      </button>
      <button className="modal-toggle" onClick={handleModalToggle}>
        Show Modal
      </button>
    </div>
  );
}
export default Home;
