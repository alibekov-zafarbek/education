import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// import './assets/scss/core.scss'
import './assets/i18n.js'


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
