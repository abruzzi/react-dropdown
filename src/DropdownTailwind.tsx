import { useDropdown } from "./useDropdown";
import "tailwindcss/tailwind.css";
import { Item } from "./types";

const DropdownUI: React.FC<{ items: Item[] }> = ({ items }) => {
  const {
    isOpen,
    toggleDropdown,
    dropdownRef,
    selectedIndex,
    handleKeyDown,
    selectedItem,
    getAriaAttributes,
    updateSelectedIndex,
  } = useDropdown(items);

  console.log(isOpen)
  console.log(isOpen)
  return (
    <div
      className="relative"
      ref={dropdownRef}
      onClick={toggleDropdown}
      onKeyDown={handleKeyDown}
      {...getAriaAttributes()}
    >
      <div className="btn p-2 border rounded min-w-[200px]" tabIndex={0}>
        {selectedItem ? selectedItem.text : "Select an item..."}
      </div>

      {isOpen && (
        <ul
          className="dropdown-menu bg-white shadow-sm rounded mt-2 absolute w-full min-w-[200px]"
          role="listbox"
        >
          {items.map((item, index) => (
            <li
              role="option"
              aria-selected={index === selectedIndex}
              key={index}
              onClick={() => updateSelectedIndex(index)}
              className={`p-2 border-b border-gray-200 flex items-center ${
                index === selectedIndex ? "bg-gray-100" : ""
              }`}
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

export default DropdownUI;
