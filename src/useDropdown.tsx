import { Item } from "./types";
import React, { useEffect, useMemo, useRef, useState } from "react";

export const useDropdown = (items: Item[]) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const getAriaAttributes = () => ({
    'aria-expanded': isOpen,
    'aria-activedescendant': selectedItem ? selectedItem.text : undefined,
  });

  const selectedItem = useMemo(() => {
    return items[selectedIndex];
  }, [items, selectedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
      case " ":
        setIsOpen((isOpen) => !isOpen);
        break;
      case "ArrowDown":
        setSelectedIndex((prevIndex) => {
          if (prevIndex === items.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
        break;
      case "ArrowUp":
        setSelectedIndex((prevIndex) => {
          if (prevIndex === 0) {
            return items.length - 1;
          } else {
            return prevIndex - 1;
          }
        });
        break;
      case "Home": {
        setSelectedIndex(0);
        break;
      }
      case "End": {
        setSelectedIndex(items.length - 1);
        break;
      }
      default:
        break;
    }
  };

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const updateSelectedIndex = (index: number) => {
    setSelectedIndex(index);
  };
  useEffect(() => {
    dropdownRef.current && dropdownRef.current.focus();
  }, []);

  return {
    isOpen,
    toggleDropdown,
    dropdownRef,
    selectedIndex,
    selectedItem,
    handleKeyDown,
    updateSelectedIndex,
    getAriaAttributes
  };
};
