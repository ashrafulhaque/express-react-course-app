import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto font-poppins">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
