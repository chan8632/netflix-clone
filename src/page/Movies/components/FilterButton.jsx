import React from "react";
import { Dropdown } from "react-bootstrap";
import "./FilterButton.style.css";
const handleFilter = () => {
};
const FilterButton = ({ title, items }) => {
  return (
    <Dropdown className="filter-button">
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item onClick={handleFilter} key={index}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterButton;
