import React from "react";
import "./Dropdown.css";
import { DropdownProps, Item } from "./types";
import { useDropdown } from "./useDropdown";

const Trigger = ({ text }: { text: string }) => {
  return (
    <div className="trigger" tabIndex={0}>
      <span className="selection">{text}</span>
      <span className="icon material-symbols-outlined">expand_more</span>
    </div>
  );
};

const MenuItem = ({ item }: { item: Item }) => {
  return (
    <>
      <img src={item.icon} alt={item.text} />
      <div className="details">
        <div>{item.text}</div>
        <small>{item.description}</small>
      </div>
    </>
  );
};

const DropdownMenu = ({
  items,
  selectedIndex,
  updateSelectedIndex,
}: {
  items: Item[];
  selectedIndex: number;
  updateSelectedIndex: (index: number) => void;
}) => {
  return (
    <div className="dropdown-menu" role="listbox">
      {items.map((item, index) => (
        <div
          role="option"
          aria-selected={index === selectedIndex}
          key={index}
          onClick={() => updateSelectedIndex(index)}
          className={`item-container ${
            index === selectedIndex ? "highlighted" : ""
          }`}
        >
          <MenuItem item={item} />
        </div>
      ))}
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
    updateSelectedIndex,
  } = useDropdown(items);

  return (
    <div
      className="dropdown"
      ref={dropdownRef}
      onClick={toggleDropdown}
      onKeyDown={handleKeyDown}
    >
      <Trigger text={selectedItem ? selectedItem.text : "Select an item..."} />

      {isOpen && (
        <DropdownMenu
          items={items}
          updateSelectedIndex={updateSelectedIndex}
          selectedIndex={selectedIndex}
        />
      )}
    </div>
  );
};

export default Dropdown;
