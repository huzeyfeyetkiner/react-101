import React from "react";
import { FaTimes } from "react-icons/fa";
import { useSidebar } from "../context/context";

function Modal() {
  const { showModal, setShowModal } = useSidebar();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`modal-overlay ${showModal ? "show-modal" : ""}`}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal" onClick={handleCloseModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
export default Modal;
