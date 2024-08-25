import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.png";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform authentication logic here (e.g., check username and password)

    // If authentication is successful, navigate to the home page
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary text-textprimary">
      <div className="w-full max-w-md p-8 space-y-6 bg-primary rounded-lg">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="w-20 h-20" />
        </div>

        {/* Welcome Back Text */}
        <h2 className="text-center text-5xl font-bold">WELCOME BACK</h2>

        {/* Sign Up Link */}
        <p className="text-center text-xl">
          Don't have an account yet?{" "}
          <Link to="/signup" className="font-bold text-textprimary">
            Sign Up
          </Link>
        </p>

        {/* Input Fields */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-2 mb-4 bg-primary border border-solid border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-2 bg-primary border border-solid border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="keepLoggedIn"
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-secondary focus:ring-2"
              />
              <label htmlFor="keepLoggedIn" className="ml-2 text-sm">
                Keep me logged in
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="forgotPassword"
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-secondary focus:ring-2"
              />
              <label htmlFor="forgotPassword" className="ml-2 text-sm">
                Forgot password?
              </label>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-2 text-textsecondary bg-secondary rounded-lg hover:bg-button focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
