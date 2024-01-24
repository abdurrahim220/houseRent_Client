import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLoading from "../components/MainLoading.jsx/MainLoading";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLoading from "../components/Loading/DashboardLoading";
import AddNewHouse from "../dashboard/pages/AddNewHouse";

const Dashboard = React.lazy(() => import("../dashboard/Layout/Dashboard"));
const Main = React.lazy(() => import("../Layout/Main"));
import DashboardHome from "../dashboard/Home/DashboardHome";
import HouseDetails from "../pages/HouseDetails/HouseDetails";
import BookedHouse from "../dashboard/pages/BookedHouse";
import EditHouse from "../dashboard/pages/EditHouse";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: (
      <Suspense fallback={<MainLoading />}>
        <Main />
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
      {
        path: "/property/:id",
        element: <HouseDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <Error />,
    element: (
      <Suspense fallback={<DashboardLoading />}>
        <Dashboard />
      </Suspense>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/addNewHouse",
        element: <AddNewHouse />,
      },
      {
        path: "/dashboard/editHouse/:id",
        element: <EditHouse />,
      },
      {
        path: "/dashboard/bookedHouse",
        element: <BookedHouse />,
      },
    ],
  },
]);

export default router;
