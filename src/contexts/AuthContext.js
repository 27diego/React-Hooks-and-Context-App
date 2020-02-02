import React, { Component, createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const toggle = () => {
    isAuthenticated ? setAuthenticated(false) : setAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggle }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
