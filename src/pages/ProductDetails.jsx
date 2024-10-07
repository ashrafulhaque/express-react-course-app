import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProductDetails = () => {
  // Get the product ID from the route
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product details by ID
    fetch(`https://express-endpoint-server.vercel.app/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCourse(data); // Set the course data
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]); // Re-fetch when the ID changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!course) {
    return <p>No course found.</p>;
  }

  return (
    <>
      <Navbar />

      <section className="container font-poppins mx-auto">
        <h2 className="font-play text-5xl pt-6 pb-6 text-center font-bold">
          <span className="border-b-4 border-spacing-3 border-slate-600">
            Course
          </span>
          <span className="text-green-600"> Details </span>
        </h2>
        <div className="container mx-auto px-4 my-8">
          <div className="flex flex-col md:flex-row">
            <img
              src={course.img_url}
              alt={course.title}
              className="w-full md:w-1/2 h-auto"
            />
            <div className="w-full md:w-1/2 px-5 shadow-2xl">
              <img
                className="rounded-full w-[200px] mb-4 mt-2"
                src={course.author_img_url}
                alt="Author image"
              />
              <p className="text-gray-600 mb-2 font-play font-bold">
                Author: {course.author}
              </p>
              <h2 className="text-3xl mb-4">{course.title}</h2>
              <p className="text-gray-600 mb-2">Level: {course.level}</p>
              <p className="text-gray-600 mb-4 text-justify">
                {course.details}.
              </p>
              <p className="text-gray-600 mb-2">Lessons: {course.lession}</p>
              <p className="text-gray-600 mb-2">
                Total Students: {course.student}
              </p>
              <p className="text-gray-600 mb-2">Duration: {course.duration}</p>
              <p className="text-yellow-500 font-bold mb-4">
                Rating: {course.ratings}
              </p>
              <p className="text-orange-400 font-semibold mb-2">
                Price: ${course.price}
              </p>
              <p className="text-gray-600 mb-2">
                Assessments: {course.assessments}
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer  bg-slate-800 mx-auto text-neutral-content items-center p-5">
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

export default ProductDetails;
