import { createBrowserRouter, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   path: "/home",
      //   element: <Home />,
      // },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
    errorElement: <Error />,
  },
]);

export { appRouter, App };
