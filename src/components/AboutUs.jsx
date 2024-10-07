import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="py-5 mx-10">
        <h2 className="font-play text-5xl py-6 font-bold">
          <span className="text-green-400">About</span> Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="pr-10 py-5">
            <h3 className="font-bold pb-5 text-gray-700 text-3xl font-courgette">
              <span className="pr-2 border-spacing-1 border-b-8 border-green-400">
                Who
              </span>
              We Are
            </h3>

            <p className="text-gray-500 text-md my-5 text-justify">
              We offer flexible, affordable, and job-relevant online courses,
              high quality video lectures, and certificates.
            </p>

            <p className="text-gray-500 text-md text-justify pt-3 leading-6">
              A full-stack web application built with React, Firebase
              Authentication, and Node.js/Express.js. The project features a
              secure authentication system using Firebase (supporting Google,
              GitHub, and email/password login), protected routes for accessing
              product information, and an Express.js backend serving product
              data via API. Fully deployed with responsive design and a clean,
              user-friendly interface.
            </p>
            <p className="text-gray-500 text-md text-justify pt-3 leading-6">
              This project has a Node.js and Express.js backend server that
              provides product data via RESTful API endpoints. It is designed to
              work with a React frontend using Firebase Authentication, ensuring
              that product data can only be accessed by authenticated users.
            </p>
          </div>
          <div>
            <p className="text-orange-600 text-lg font-bold text-center my-6 font-courgette">
              Owner of the website: Md. Ashraful Haque
            </p>
            <img
              src="./about.jpg"
              className="mask mask-hexagon mx-auto max-h-[500px]"
              alt="Get in touch image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
