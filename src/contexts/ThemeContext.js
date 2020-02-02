import React, { createContext } from "react";

//this creates context and stored in const
export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isLightTheme: true,
    light: {
      syntax: "#555",
      ui: "#ddd",
      bg: "#eee"
    },
    dark: {
      syntax: "#ddd",
      ui: "#333",
      bg: "#555"
    }
  };
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {/* This refers to the children that the context provider wraps on */}
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
