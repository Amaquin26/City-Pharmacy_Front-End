
import { useDataContext } from "./api/context/DataContext";
import NavigationBar from "./components/NavigationBar.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import ProductsPage from "./pages/Products/ProductsPage.tsx";
import NotFoundPage from "./pages/Errors/NotFoundPage.tsx";
import ProductViewPage from "./pages/Products/ProductViewPage.tsx";
import NotFoundProduct from "./pages/Errors/NotFoundProduct.tsx";
import MedicinesPage from "./pages/Medicines/MedicinesPage.tsx";
import MedicineViewPage from "./pages/Medicines/MedicineViewPage.tsx";
import NotFoundMedicine from "./pages/Errors/NotFoundMedicine.tsx";
import Inventory from "./pages/Inventory/Inventory.tsx";
import OrdersPage from "./pages/Orders/OrdersPage.tsx";
import ProfilePage from "./pages/Profile/ProfilePage.tsx";
import { HomePage } from "./pages/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
  {
    path: "/inventory",
    element: <Inventory />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/orders",
    element: <OrdersPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    errorElement: <NotFoundPage />
  },

]);

function App() {

  const {mode} = useDataContext();

  return (
    <main className={`${mode} text-foreground bg-background`}>
      <NavigationBar />
      <RouterProvider router={router} />
    </main>   
  );
}

export default App;