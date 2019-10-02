import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className="searchbox_align">
    <input
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
      className="search"
    />
  </div>
);
