import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice.jsx";

function loadState() {
  try {
    if (typeof window === "undefined") return undefined;
    const raw = window.localStorage.getItem("redux_state");
    if (!raw) return undefined;
    return JSON.parse(raw);
  } catch {
    return undefined;
  }
}

function saveState(state) {
  try {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("redux_state", JSON.stringify(state));
  } catch {
    // ignore write errors (quota/private mode)
  }
}

export const store = configureStore({
  preloadedState: loadState(),
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveState({ cart: state.cart });
});
