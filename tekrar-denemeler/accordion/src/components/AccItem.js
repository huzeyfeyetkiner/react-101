import { useState } from "react";

function AccItem({ item }) {
  const [isOpen, setIsOpen] = useState(true);
  return <div className="Accordion">{item.title}</div>;
}
export default AccItem;
