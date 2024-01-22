import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLoading from "../components/MainLoading.jsx/MainLoading";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
const Main = React.lazy(() => import("../Layout/Main"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error/>,
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
    ],
  },
]);

export default router;
