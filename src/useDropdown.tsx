import React, { useMemo, useState } from "react";

const getNextIndexOf = (total: number) => (current: number) => {
  if (current === total - 1) {
    return 0;
  } else {
    return current + 1;
  }
};

const getPreviousIndexOf = (total: number) => (current: number) => {
  if (current === 0) {
    return total - 1;
  } else {
    return current - 1;
  }
};

export const useDropdown = <T extends { text: string }>(items: T[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  const getAriaAttributes = () => ({
    "aria-expanded": isOpen,
    "aria-activedescendant": selectedItem ? selectedItem.text : undefined,
  });

  const getNextIndex = getNextIndexOf(items.length);
  const getPreviousIndex = getPreviousIndexOf(items.length);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault();
    switch (e.key) {
      case "Enter":
      case " ":
        setSelectedItem(items[selectedIndex]);
        setIsOpen((isOpen) => !isOpen);
        break;
      case "ArrowDown":
        setSelectedIndex(getNextIndex);
        break;
      case "ArrowUp":
        setSelectedIndex(getPreviousIndex);
        break;
      case "Home":
        setSelectedIndex(0);
        break;
      case "End":
        setSelectedIndex(items.length - 1);
        break;
      default:
        break;
    }
  };

  const toggleDropdown = () => setIsOpen((isOpen) => !isOpen);

  const updateSelectedItem = (item: T) => {
    setSelectedItem(item);
    setSelectedIndex(items.indexOf(item));
  };

  return {
    isOpen,
    toggleDropdown,
    selectedIndex,
    selectedItem,
    handleKeyDown,
    updateSelectedItem,
    getAriaAttributes,
  };
};
