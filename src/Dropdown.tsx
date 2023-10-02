import React from "react";
import "./Dropdown.css";
import { DropdownProps } from "./types";
import { useDropdown } from "./useDropdown";

const Trigger = ({ text }: { text: string }) => {
  return (
    <div className="trigger" tabIndex={0}>
      <span className="selection">{text}</span>
      <span className="icon material-symbols-outlined">expand_more</span>
    </div>
  );
};

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const {
    toggleDropdown,
    handleKeyDown,
    dropdownRef,
    isOpen,
    selectedItem,
    selectedIndex,
    selectItem,
  } = useDropdown(items);

  return (
    <div
      className="dropdown"
      ref={dropdownRef}
      onClick={toggleDropdown}
      onKeyDown={handleKeyDown}
    >
      <Trigger text={selectedItem ? selectedItem.text : "Select an item..."} />
      <div className="trigger" tabIndex={0}>
        <span className="selection">
          {selectedItem ? selectedItem.text : "Select an item..."}
        </span>
        <span className="icon material-symbols-outlined">expand_more</span>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => selectItem(item)}
              className={`item-container ${
                index === selectedIndex ? "highlighted" : ""
              }`}
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
