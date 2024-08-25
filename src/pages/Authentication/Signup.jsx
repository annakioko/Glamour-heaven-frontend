import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.png";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., Firebase authentication)
    // After successful signup, navigate to the login page
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary text-textprimary">
      <div className="w-full max-w-md p-8 space-y-6 bg-primary rounded-lg ">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="w-20 h-20" />
        </div>

        {/* Create Account Text */}
        <h2 className="text-center text-5xl font-bold ">CREATE AN ACCOUNT</h2>

        {/* Subtext */}
        <p className="text-center text-xl ">To get glowing skin</p>

        {/* Input Fields */}
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-2 mb-4 text-gray-700 bg-primary border border-solid border-secondary  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 mb-4 text-gray-700 bg-primary border border-solid border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-4 text-gray-700 bg-primary border border-solid border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-textsecondary bg-secondary rounded-lg hover:bg-button focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm ">
          Already have an account?{" "}
          <Link to="/login" className="font-bold ">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
