import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Appcontext } from "./context/appcontext.jsx";

createRoot(document.getElementById("root")).render(
  <Appcontext>
    <App />
  </Appcontext>,
);
