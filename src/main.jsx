import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRouter from "./AppRouter.jsx";
//styles

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
    <SpeedInsights/> 
  </StrictMode>
);
