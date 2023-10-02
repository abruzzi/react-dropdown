import { Item } from "./types";
import React from "react";

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
export const DropdownMenu = ({
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
