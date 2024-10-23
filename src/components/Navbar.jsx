import React from "react";
import logo from "/src/assets/logo.png"; // Import the logo
import { FaShoppingCart, FaMoon, FaSignOutAlt } from "react-icons/fa"; // Importing icons from react-icons library

const Navbar = () => {
  return (
    <nav className="bg-brown dark:bg-gray-800 ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src={logo} alt="BeautyShop Logo" className="h-10" />
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex-grow px-4 flex justify-center">
          <input
            type="text"
            placeholder="Search for beauty products"
            className="w-1/2 p-2 rounded-full border border-darkbrown bg-brown text-black placeholder-black"
          />
        </div>

        {/* Icons */}
        <div className="flex space-x-6 items-center">
          {/* Shopping Cart Icon */}
          <FaShoppingCart className="text-2xl text-black cursor-pointer" />

          {/* Moon Icon (for dark mode toggle) */}
          <FaMoon className="text-2xl text-black  cursor-pointer" />

          {/* Log Out Icon */}
          <FaSignOutAlt className="text-2xl text-black  cursor-pointer" />
        </div>
      </div>
      {/* Horizontal Line */}
      <hr className="border-black width-96 ml-12 mr-7" />
    </nav>
  );
};

export default Navbar;
