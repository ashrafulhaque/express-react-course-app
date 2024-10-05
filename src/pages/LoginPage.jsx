import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import toast from "react-hot-toast";

const LoginPage = () => {
  const { loginWithEmail, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmailLogin = (event) => {
    event.preventDefault();
    console.log("Email Login clicked");
    const form = new FormData(event.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    loginWithEmail(email, password)
      .then((result) => {
        navigate("/products");
        toast("Congratulations! You've logged in successfully.", {
          position: "bottom-right",
          style: {
            background: "green",
            color: "white",
          },
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sorry! Error occured during login.", {
          position: "bottom-right",
          style: {
            background: "red",
            color: "white",
          },
        });
      });
  };
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    loginWithGoogle()
      .then((result) => {
        navigate("/products");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubLogin = () => {
    console.log("Github login clicked");
    loginWithGithub()
      .then((result) => {
        navigate("/products");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-[400px] mx-auto border border-gray-200 p-4 my-5 shadow-md">
      <h1 className="text-xl font-semibold text-gray-800 text-center mb-3">
        Login
      </h1>
      <form
        onSubmit={handleEmailLogin}
        id="loginForm"
        className="max-w-sm mx-auto space-y-4"
      >
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
            name="password"
            type="password"
            id="password"
            className="grow"
            placeholder="Password"
          />
        </label>

        <button type="submit" className="btn btn-neutral w-full">
          Login With Email
        </button>
      </form>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-accent w-full my-3"
      >
        Login With Google
      </button>
      <button
        onClick={handleGithubLogin}
        className="btn btn-warning w-full mb-3"
      >
        Login With Github
      </button>
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
