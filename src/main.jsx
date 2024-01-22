import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route.jsx";
import HomeContextProvider from "./Provider/HomeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HomeContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    ,
  </HomeContextProvider>
);
