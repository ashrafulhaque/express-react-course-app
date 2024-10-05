import React, { useContext } from "react";
import LoginForm from "../components/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const LoginPage = () => {
  const { loginWithGoogle, loginWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();

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
      <LoginForm />
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
