import React from "react";
import { FaTimes } from "react-icons/fa";

function Modal() {
  return (
    <div className={`modal-overlay`}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal">
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
export default Modal;
