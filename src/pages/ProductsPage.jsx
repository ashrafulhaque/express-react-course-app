import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

const Products = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API endpoint
  useEffect(() => {
    fetch("https://express-endpoint-server.vercel.app/products/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched data
        setCourses(data);
        console.log("Fetched data:", data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Navbar />
      <section className="container font-poppins mx-auto py-6">
        <h2 className="font-play text-5xl pt-6 pb-6 text-center font-bold">
          <span className="border-b-4 border-spacing-3 border-slate-600">
            List of
          </span>
          <span className="text-green-600"> Courses </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </section>

      <footer className="footer bg-slate-800 mx-auto text-neutral-content items-center p-5">
        <div className="mx-auto text-[15px] text-center">
          <p>
            Copyright © {new Date().getFullYear()} Md. Ashraful Haque - All
            rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Products;
