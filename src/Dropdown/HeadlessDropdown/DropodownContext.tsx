import { createContext, RefObject, useContext } from "react";

type DropdownContextType<T> = {
  isOpen: boolean;
  toggleDropdown: () => void;
  selectedIndex: number;
  selectedItem: T | null;
  updateSelectedItem: (item: T) => void;
  getAriaAttributes: () => any;
  dropdownRef: RefObject<HTMLElement>;
};

function createDropdownContext<T>() {
  return createContext<DropdownContextType<T> | null>(null);
}

const DropdownContext = createDropdownContext();

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Components must be used within a <Dropdown/>");
  }
  return context;
};

export default DropdownContext;
