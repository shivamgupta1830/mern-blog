import { createBrowserRouter, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SingIn from "./pages/SignIn";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Button } from "flowbite-react";

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
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SingIn />,
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
