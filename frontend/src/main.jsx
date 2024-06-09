import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login.jsx";
import {Provider} from "react-redux";
import store from "../redux/store.js";
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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
