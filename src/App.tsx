import React from "react";
import "./App.css";
import Dropdown from "./Dropdown/Dropdown";
import DropdownTailwind from "./Dropdown/DropdownTailwind";
import AutoCloseExpandablePanel from "./hoc/AutoCloseExpandablePanel";
import ExpandablePanel from "./hooks/ExpandablePanel";

const users = [
  {
    icon: "https://i.pravatar.cc/128?u=John",
    text: "John Doe",
    description: "Software Engineer",
  },
  {
    icon: "https://i.pravatar.cc/128?u=Jane",
    text: "Jane Smith",
    description: "Graphic Designer",
  },
  {
    icon: "https://i.pravatar.cc/128?u=Mike",
    text: "Mike Johnson",
    description: "Product Manager",
  },
  {
    icon: "https://i.pravatar.cc/128?u=Emily",
    text: "Emily Davis",
    description: "UX Designer",
  },
  {
    icon: "https://i.pravatar.cc/128?u=Robert",
    text: "Robert Brown",
    description: "Data Analyst",
  },
];

function App() {
  return (
    <div className="app">
      <Dropdown />
      <DropdownTailwind />

      <ExpandablePanel
        heading="Hello darkness my old friend"
        content={<div>The content</div>}
      />
    </div>
  );
}

export default App;
