import { createRoot } from "react-dom/client";
import { appRouter } from "./App.jsx";

import { RouterProvider } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
