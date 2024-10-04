import React from "react";
import Navbar from "../components/Navbar";

const Products = () => {
  return (
    <>
      <Navbar />
      <section className="container font-poppins mx-auto">
        <h1 className="text-orange-800">Products</h1>
      </section>

      <footer className="footer  bg-slate-800 mx-auto text-neutral-content items-center p-5">
        <div className="mx-auto text-center">
          <p>
            Copyright © {new Date().getFullYear()} Md. Ashraful Haque - All
            right reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Products;
