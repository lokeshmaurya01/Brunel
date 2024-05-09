import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Registration from "./components/Registration.jsx";
import Header from "./components/Header.jsx";
import Homepage from "./components/Homepage.jsx";
import SuccesPage from "./components/SuccesPage.jsx";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/success",
        element: <SuccesPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
