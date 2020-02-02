import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./ThemeToggle.scss";

const ThemeToggle = props => {
  const context = useContext(ThemeContext);
  const { toggleTheme } = context;

  return (
    <div>
      <button className="btn" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
