import {Item} from "./types";
import React, {useEffect, useRef, useState} from "react";

export const useDropdown = (items: Item[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
      case " ":
        if (isOpen) {
          setSelectedItem(items[selectedIndex]);
          setIsOpen(false);
        } else {
          setIsOpen(true);
        }
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

  const selectItem = (item: Item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    dropdownRef.current && dropdownRef.current.focus();
  }, []);

  return {
    isOpen,
    toggleDropdown,
    selectItem,
    dropdownRef,
    selectedIndex,
    selectedItem,
    handleKeyDown,
  };
};