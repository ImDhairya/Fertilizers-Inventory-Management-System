import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login.jsx";
import {Provider} from "react-redux";
import store from "../redux/store.js";
// import Dashboard from "./components/Dashboard.jsx";
import CardComponent from "./components/Card.jsx";
/*
This is showing how differnet routing can be done here 
const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
    children: [
      {
        path: "/home/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
*/

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
    children: [
      {
        path: "/home/login",
        element: <Login />,
      },
      // {
      //   path: "/home/card",
      //   element: <CardComponent />,
      // },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home/card",
    element: <CardComponent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
