import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./FilterButton.style.css";

const FilterButton = ({ title, items, dataHandling }) => {
  const [buttonText, setButtonText] = useState(title);
  const selectButton = (event) => {
    const selectedText = event.target.innerText;
    dataHandling(selectedText);
    setButtonText(selectedText);
  };
  return (
    <Dropdown className="filter-button">
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        {buttonText}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items?.map((item, index) => (
          <Dropdown.Item onClick={selectButton} key={index}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterButton;
