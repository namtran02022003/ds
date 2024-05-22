import ReactDOM from "react-dom/client";
import "./settings/localization/i18n.ts";
import { RouterProvider } from "react-router-dom";
import React from "react";
import { router } from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
