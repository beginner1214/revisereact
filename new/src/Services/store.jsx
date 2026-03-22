import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice.jsx";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
