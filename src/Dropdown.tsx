import React from "react";
import "./Dropdown.css";
import { DropdownProps, Item } from "./types";
import { useDropdown } from "./useDropdown";
import { DropdownMenu } from "./DropdownMenu";

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
    isOpen,
    selectedItem,
    selectedIndex,
    updateSelectedItem,
    getAriaAttributes,
  } = useDropdown<Item>(items);

  return (
    <div
      className="dropdown"
      onClick={toggleDropdown}
      onKeyDown={handleKeyDown}
      {...getAriaAttributes()}
    >
      <Trigger text={selectedItem ? selectedItem.text : "Select an item..."} />

      {isOpen && (
        <DropdownMenu
          items={items}
          updateSelectedItem={updateSelectedItem}
          selectedIndex={selectedIndex}
        />
      )}
    </div>
  );
};

export default Dropdown;
