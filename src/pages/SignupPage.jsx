import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/Provider/AuthProvider";

const SignupPage = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const displayName = form.get("displayName");
    const email = form.get("email");
    const password = form.get("password");
    const photoURL = form.get("photoURL");

    createUser(displayName, email, password, photoURL)
      .then((result) => {
        console.log("User created successfully!");
        navigate("/products");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-[400px] mx-auto border border-gray-200 p-4 my-5 shadow-md">
      <h1 className="text-xl font-semibold text-gray-800 text-center mb-3">
        Signup
      </h1>
      <form
        onSubmit={handleSignup}
        id="signupForm"
        className="max-w-sm mx-auto space-y-4"
      >
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            name="displayName"
            type="text"
            className="grow"
            placeholder="Name"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            name="email"
            type="text"
            className="grow"
            placeholder="Email"
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            name="password"
            id="password"
            className="grow"
            placeholder="Password"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM7 1.601a6.401 6.401 0 0 1 0 12.797V1.6ZM6 1.6v12.797A6.401 6.401 0 0 1 6 1.6ZM8 8l5.33-.372A6.463 6.463 0 0 0 8 1.6v6.399ZM8 8v6.399A6.463 6.463 0 0 0 13.33 8.373L8 8Zm-.37 5.33l-.001-6.399A6.463 6.463 0 0 0 1.6 8a6.463 6.463 0 0 0 5.33 5.33Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            name="photoURL"
            id="photoURL"
            className="grow"
            placeholder="https://example.com/profile-photo.jpg"
            required
          />
        </label>
        <button type="submit" className="btn btn-neutral w-full mt-4">
          Signup
        </button>
      </form>

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
