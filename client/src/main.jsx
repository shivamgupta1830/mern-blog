import { createRoot } from "react-dom/client";
import { appRouter } from "./App.jsx";

import { RouterProvider } from "react-router-dom";
import "./index.css";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ThemeProvider from "./components/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
        {" "}
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </Provider>
  </PersistGate>
);
