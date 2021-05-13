import React from "react";
import "./search-box.styles.css";

//Aquí estoy deestructurando el prop en estos dos parámetros
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
