import { useState } from "react";

function AccItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion-header">
        <div className="title">
          <span>{item.title}</span>
        </div>
        <div className="toggle">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "-" : "+"}
          </button>
        </div>
      </div>
      <div className={`${isOpen ? "acc-desc open" : "acc-desc"}`}>
        {item.info}
      </div>
    </div>
  );
}
export default AccItem;
