import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., Firebase authentication)
    // After successful signup, navigate to the login page
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/path/to/logo.png" alt="Logo" className="w-20 h-20" />
        </div>

        {/* Create Account Text */}
        <h2 className="text-center text-2xl font-bold text-gray-800">
          CREATE AN ACCOUNT
        </h2>

        {/* Subtext */}
        <p className="text-center text-sm text-gray-600">To get glowing skin</p>

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
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
