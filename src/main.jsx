import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStorage } from "./context/ProductsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalStorage>
    <App />
  </GlobalStorage>
);
