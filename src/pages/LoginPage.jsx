import React from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="max-w-[400px] mx-auto border border-gray-200 p-4 my-5 shadow-md">
      <h1 className="text-xl font-semibold text-gray-800 text-center mb-3">
        Login
      </h1>
      <LoginForm />
      <button class="btn btn-accent w-full my-3">Login With Google</button>
      <button class="btn btn-warning w-full mb-3">Login With Github</button>
      <p className="text-center bold">
        Don't have an account?{" "}
        <Link className="text-lime-600 underline" to="/signup">
          Signup Here
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
