import React from "react";
import { HeadlessDropdown as Dropdown } from "./HeadlessDropdown";
import { Item } from "../../types";

import "./style.css";

const CustomTrigger = ({
  onClick,
  ...props
}: { onClick: () => void } & React.HTMLAttributes<HTMLButtonElement>) => (
  <button className="trigger" onClick={onClick} {...props} />
);

const CustomList = ({ ...props }: { [key: string]: any }) => (
  <div {...props} className="dropdown-menu" />
);

const CustomListItem = ({ ...props }: { [key: string]: any }) => (
  <div {...props} className="item-container" />
);

const HeadlessDropdownUsage = ({ items }: { items: Item[] }) => {
  return (
    <Dropdown items={items}>
      <Dropdown.Trigger as={CustomTrigger}>Select an option</Dropdown.Trigger>
      <Dropdown.List as={CustomList}>
        {items.map((item, index) => (
          <Dropdown.Option
            index={index}
            key={index}
            item={item}
            as={CustomListItem}
          />
        ))}
      </Dropdown.List>
    </Dropdown>
  );
};

export default HeadlessDropdownUsage;
