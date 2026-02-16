import { createContext } from "react";
import React from "react";

export const Appcontext = createContext();

export const contextProvider = ({ props }) => {
  return <Appcontext.Provider>{props.children}</Appcontext.Provider>;
};
