import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        {/* Left Section: Logo and "Glamorous Heaven" */}
        <div className="flex flex-col items-start">
          <div className="text-2xl font-bold">
            {/* Logo Placeholder */}
            <a href="/" className="text-white">
              BeautyShop Logo
            </a>
          </div>
          <p className="mt-2 text-gray-400">Glamorous Heaven</p>
        </div>

        {/* Right Section: Three Columns */}
        <div className="flex flex-wrap space-x-10">
          {/* Column 1: About Us */}
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-2">About Us</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Vision
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Shop */}
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-2">Shop</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Beauty Essentials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Address */}
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-2">Address</h3>
            <ul>
              <li>
                <span className="text-gray-400">123 Beauty Lane</span>
              </li>
              <li>
                <span className="text-gray-400">City, State 45678</span>
              </li>
              <li>
                <span className="text-gray-400">info@beautyshop.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
