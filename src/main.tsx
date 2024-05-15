import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import NavigationBar from "./components/NavigationBar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <NotFoundPage />
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="text-foreground bg-background">
        <NavigationBar />
        <RouterProvider router={router} />
      </main>    
    </NextUIProvider>
  </React.StrictMode>
);
