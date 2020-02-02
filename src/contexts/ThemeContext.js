import React, { createContext, useState } from "react";

//this creates context and stored in const
export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [isLightTheme, setLightTheme] = useState(true);
  const [light] = useState({
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee"
  });
  const [dark] = useState({
    syntax: "#ddd",
    ui: "#333",
    bg: "#555"
  });

  const toggleTheme = () => {
    isLightTheme ? setLightTheme(false) : setLightTheme(true);
  };

  return (
    <ThemeContext.Provider value={{ light, isLightTheme, dark, toggleTheme }}>
      {/* This refers to the children that the context provider wraps on */}
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
