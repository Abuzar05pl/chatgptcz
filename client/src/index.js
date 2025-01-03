import React from "react";
import ReactDOM from "react-dom/client"; // React 18
import { BrowserRouter } from "react-router-dom"; // Используем BrowserRouter
import App from "./App";
import "./index.css"; // Ваши стили

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
