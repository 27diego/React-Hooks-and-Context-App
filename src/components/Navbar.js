import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const context1 = useContext(ThemeContext);
  const { isLightTheme, light, dark } = context1;
  const theme = isLightTheme ? light : dark;

  const context2 = useContext(AuthContext);
  const { isAuthenticated, toggle } = context2;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div>{isAuthenticated ? "Logged in" : "Logged out"}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
