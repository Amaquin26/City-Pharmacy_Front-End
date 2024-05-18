import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import NavigationBar from "./components/NavigationBar.tsx";
import ProductsPage from "./pages/Products/ProductsPage.tsx";
import NotFoundPage from "./pages/Errors/NotFoundPage.tsx";
import ProductViewPage from "./pages/Products/ProductViewPage.tsx";
import NotFoundProduct from "./pages/Errors/NotFoundProduct.tsx";
import MedicinesPage from "./pages/Medicines/MedicinesPage.tsx";
import MedicineViewPage from "./pages/Medicines/MedicineViewPage.tsx";
import NotFoundMedicine from "./pages/Errors/NotFoundMedicine.tsx";

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
  {
    path: "/products",
    element: <ProductsPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/products/:id",
    element: <ProductViewPage />,
    errorElement: <NotFoundProduct />
  },
  {
    path: "/medicines",
    element: <MedicinesPage />,
    errorElement: <NotFoundMedicine />
  },
  {
    path: "/medicines/:id",
    element: <MedicineViewPage />,
    errorElement: <NotFoundMedicine />
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
