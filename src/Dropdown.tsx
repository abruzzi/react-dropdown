import React, { ChangeEvent, useState } from "react";
import "./Dropdown.css";

interface Item {
  icon: string;
  text: string;
  description: string;
}

interface DropdownProps {
  items: Item[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
      <div className="trigger" tabIndex={0}>
        <span className="selection">{selectedItem ? selectedItem.text : "Select an item..."}</span>
        <span className="icon material-symbols-outlined">expand_more</span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="item-container"
            >
              <img src={item.icon} alt={item.text} />
              <div className="details">
                <div>{item.text}</div>
                <small>{item.description}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
