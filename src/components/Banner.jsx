import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero max-h-[70vh] sm:min-h-[70vh] w-full"
        style={{
          backgroundImage: "url(./Banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl sm:text-5xl font-bold font-play">
              Become a Full Stack Developer
            </h1>
            <p className="mb-5">
              Pursue a new career and gain skills like React, Tailwind, Next.js,
              GenAI, and more—no prior experience required to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
