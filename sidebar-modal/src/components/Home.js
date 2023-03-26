import React from "react";
import { FaBars } from "react-icons/fa";

function Home() {
  return (
    <div className="main">
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="modal-toggle">Show Modal</button>
    </div>
  );
}
export default Home;
