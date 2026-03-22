import { createContext } from "node:vm";
import React from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  <userContext.Provider value={{ name: "satyarth", age: 22 }}>
    {children}
  </userContext.Provider>;
};
