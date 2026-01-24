// imports
import "./style/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
