import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import VisitorSearch from "./VisitorSearch.jsx";
import AsideBar from "./AsideBar.jsx";
import ManageVisitor from "./ManageVisitor.jsx";
import LogOut from "./LogOut.jsx";
import Dashboard from "./Dashboard.jsx";
import Register from "./Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "asideBar",
    element: <AsideBar />,
  },
  {
    path: "/dashboardBar",
    element: <Dashboard />,
  },
  {
    path: "/visitorSearch",
    element: <VisitorSearch />,
  },
  {
    path: "/manageVisitor",
    element: <ManageVisitor />,
  },
  {
    path: "/logOut",
    element: <LogOut />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
