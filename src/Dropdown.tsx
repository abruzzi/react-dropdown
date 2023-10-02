import React from "react";
import "./Dropdown.css";
import { DropdownProps } from "./types";
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
    dropdownRef,
    isOpen,
    selectedItem,
    selectedIndex,
    updateSelectedIndex,
    getAriaAttributes,
  } = useDropdown(items);

  return (
    <div
      className="dropdown"
      ref={dropdownRef}
      onClick={toggleDropdown}
      onKeyDown={handleKeyDown}
      {...getAriaAttributes()}
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
