import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  return (
    <div className="max-w-[400px] mx-auto border border-gray-200 p-4 my-5 shadow-md">
      <h1 className="text-xl font-semibold text-gray-800 text-center mb-3">
        Signup
      </h1>
      <SignupForm />
      <p className="text-center bold mt-3">
        Already have an account? {"  "}
        <Link className="text-lime-600 underline" to="/login">
          Login Here
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
