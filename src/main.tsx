import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Sample from "./Sample.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/sample",
    element: <Sample />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
