import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Heder from "./component/Heder/Heder";
import Home from "./component/LayOut/Home";
import Shop from "./component/Shop/Shop";
import Orders from "./component/Orders/Orders";
import Inventory from "./component/Inventory/Inventory";
import LogIn from "./component/LogIn/LogIn";
import cardProductLoader from "./loader/CartProductLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:"/",
        element:<Shop></Shop>,
      },
      {
        path:"orders",
        element:<Orders></Orders>,
        loader:cardProductLoader
      },
      {
        path:"inventory",
        element:<Inventory></Inventory>
      },
      {
        path:"login",
        element:<LogIn></LogIn>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
