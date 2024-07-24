import React from "react";

const TabButton = ({ children, onSelect, isSelected }) => {
  {
    /* function handleClick() {
    console.log("Hello world");
  } OLD LOGIC*/
  }

  console.log("TABBUTTON COMPONENT EXECUTING");

  return (
    <div>
      <li>
        <button
          className={isSelected ? "active" : undefined}
          onClick={onSelect}
        >
          {children}
        </button>
      </li>
    </div>
  );
};

export default TabButton;
