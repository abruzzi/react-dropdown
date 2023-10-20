import DropdownContext, { useDropdownContext } from "./DropodownContext";
import { useDropdown } from "../useDropdown";
import React, { RefObject } from "react";

import "./style.css";

const HeadlessDropdown = <T extends { text: string }>({
  children,
  items,
}: {
  children: React.ReactNode;
  items: T[];
}) => {
  const {
    isOpen,
    toggleDropdown,
    selectedIndex,
    selectedItem,
    updateSelectedItem,
    getAriaAttributes,
    dropdownRef,
  } = useDropdown(items);

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        toggleDropdown,
        selectedIndex,
        selectedItem,
        // @ts-ignore
        updateSelectedItem,
      }}
    >
      <div
        ref={dropdownRef as RefObject<HTMLDivElement>}
        {...getAriaAttributes()}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

type GenericComponentType = {
  as?: string | React.ComponentType<any>;
  [key: string]: any;
};

HeadlessDropdown.Trigger = function Trigger({
  as: Component = "button",
  ...props
}: GenericComponentType) {
  const { toggleDropdown } = useDropdownContext();

  return <Component tabIndex={0} onClick={toggleDropdown} {...props} />;
};

HeadlessDropdown.List = function List({
  as: Component = "ul",
  ...props
}: GenericComponentType) {
  const { isOpen } = useDropdownContext();

  return isOpen ? <Component {...props} role="listbox" tabIndex={0} /> : null;
};

HeadlessDropdown.Option = function Option({
  as: Component = "li",
  index,
  item,
  ...props
}: GenericComponentType) {
  const { updateSelectedItem, selectedIndex } = useDropdownContext();

  return (
    <Component
      role="option"
      aria-selected={index === selectedIndex}
      key={index}
      onClick={() => updateSelectedItem(item)}
      {...props}
    >
      {item.text}
    </Component>
  );
};

export { HeadlessDropdown };
