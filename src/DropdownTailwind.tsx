import "tailwindcss/tailwind.css";
import { useDropdown } from "./useDropdown";
import { DropdownProps, Item } from "./types";
import React from "react";

const DropdownTailwind: React.FC<DropdownProps> = ({ items }) => {
  const {
    isOpen,
    toggleDropdown,
    selectedIndex,
    handleKeyDown,
    selectedItem,
    updateSelectedItem,
    getAriaAttributes,
  } = useDropdown<Item>(items);

  return (
    <div
      className="relative"
      onClick={toggleDropdown}
      onKeyDown={handleKeyDown}
      {...getAriaAttributes()}
    >
      <button className="btn p-2 border rounded min-w-[240px]" tabIndex={0}>
        {selectedItem ? selectedItem.text : "Select an item..."}
      </button>

      {isOpen && (
        <ul
          className="dropdown-menu bg-white shadow-sm rounded mt-2 absolute w-full min-w-[240px]"
          role="listbox"
        >
          {items.map((item, index) => (
            <li
              key={index}
              role="option"
              aria-selected={index === selectedIndex}
              onClick={() => updateSelectedItem(item)}
              className={`p-2 border-b border-gray-200 flex items-center ${
                index === selectedIndex ? "bg-gray-100" : ""
              } hover:bg-blue-100`}
            >
              <img
                src={item.icon}
                alt={item.text}
                className="w-8 h-8 mr-2 rounded border-2 border-red-500"
              />
              <div className="flex flex-col">
                <span className="text">{item.text}</span>
                <span className="text-sm text-gray-500">
                  {item.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownTailwind;
