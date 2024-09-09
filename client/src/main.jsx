import { createRoot } from "react-dom/client";
import { appRouter } from "./App.jsx";

import { RouterProvider } from "react-router-dom";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
