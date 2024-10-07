import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={course.img_url}
        alt={course.title}
        className="h-64 w-full object-cover"
      />
      <div className="p-4">
        {/* Check if tags exist before mapping */}
        {course.tags && course.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {course.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="text-lg font-bold mb-2">{course.title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Author: {course.author}</p>
          <p className="text-orange-500 text-sm font-semibold">
            Price: {course.price}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-600">Duration: {course.duration}</p>
          <p className="text-yellow-500 text-sm font-semibold">
            {course.ratings}
          </p>
        </div>
        <Link
          to={`/products/${course._id}`} // Dynamic route to product details
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 inline-block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
