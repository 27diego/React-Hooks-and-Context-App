import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = props => {
  const context = useContext(ThemeContext);
  const { isLightTheme, toggleTheme } = context;

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
