import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookList = props => {
  const context = useContext(ThemeContext);
  const { light, dark, isLightTheme } = context;
  const theme = isLightTheme ? light : dark;

  const context2 = useContext(BookContext);
  const { books } = context2;

  useEffect(() => {
    console.log("rendering", isLightTheme);
  });

  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map(book => (
          <li style={{ background: theme.ui }} key={book.id}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
