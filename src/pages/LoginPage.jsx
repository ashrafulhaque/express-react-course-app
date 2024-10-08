import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Firebase/Provider/AuthProvider";
import toast from "react-hot-toast";

const LoginPage = () => {
  const { loginWithEmail, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Get the "redirectPath" from state or default to "/products"
  const redirectPath = location.state?.redirectPath || "/products";

  const handleEmailLogin = (event) => {
    event.preventDefault();
    console.log("Email Login clicked");
    const form = new FormData(event.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    loginWithEmail(email, password)
      .then(() => {
        navigate(redirectPath, { replace: true }); // Redirect to the original page
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
        toast.error("Sorry! Error occurred during login.", {
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
      .then(() => {
        navigate(redirectPath, { replace: true }); // Redirect to the original page after Google login
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubLogin = () => {
    console.log("Github login clicked");
    loginWithGithub()
      .then(() => {
        navigate(redirectPath, { replace: true }); // Redirect to the original page after Github login
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
          <input
            name="email"
            type="text"
            className="grow"
            placeholder="Email"
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <input
            name="password"
            type="password"
            id="password"
            className="grow"
            placeholder="Password"
            required
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
