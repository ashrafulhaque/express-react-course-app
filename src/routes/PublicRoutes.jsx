import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetails from "../pages/ProductDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // True for the home page at "/"
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "/products",
    element: (
      <PrivateRoutes>
        <ProductsPage />
      </PrivateRoutes>
    ),
  },
  {
    path: "/products/:id", // Dynamic route for product details
    element: (
      <PrivateRoutes>
        <ProductDetails />
      </PrivateRoutes>
    ),
  },
]);

export default router;
