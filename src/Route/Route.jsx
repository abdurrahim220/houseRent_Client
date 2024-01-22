import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLoading from "../components/MainLoading.jsx/MainLoading";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
const Main = React.lazy(() => import("../Layout/Main"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: (
      <Suspense fallback={<MainLoading />}>
        <Main />,
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
