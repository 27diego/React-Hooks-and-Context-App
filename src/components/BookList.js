import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const BookList = props => {
  const context = useContext(ThemeContext);
  const { light, dark, isLightTheme } = context;
  const theme = isLightTheme ? light : dark;

  const context2 = useContext(AuthContext);
  const { isAuthenticated, toggle } = context2;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>The Way of Kings</li>
        <li style={{ background: theme.ui }}>The Name of the Winds</li>
        <li style={{ background: theme.ui }}>The Final Empire</li>
      </ul>
    </div>
  );
};

export default BookList;
