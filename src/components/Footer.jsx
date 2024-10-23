import React from "react";
import logo from "/src/assets/logo.png"; // Import the logo

const Footer = () => {
  return (
    <footer className="bg-darkbrown text-white py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        {/* Left Section: Logo and "Glamorous Heaven" */}
        <div className="flex flex-col items-start">
          <div className="text-2xl font-bold">
            {/* Logo Image */}
            <a href="/">
              <img src={logo} alt="BeautyShop Logo" className="h-24" />{" "}
              {/* Adjust height as needed */}
            </a>
          </div>
          <p className="mt-2 text-white">Glamorous Heaven</p>
        </div>

        {/* Right Section: Three Columns */}
        <div className="flex flex-wrap space-x-10 text-white">
          {/* Column 1: About Us */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-serif mb-2">ABOUT US</h3>
            <ul className="my-3 space-y-2">
              {" "}
              {/* Added space-y-2 for vertical spacing */}
              <li>
                <a href="#" className="font-sans hover:text-white">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="font-sans hover:text-white">
                  Mission
                </a>
              </li>
              <li>
                <a href="#" className="font-sans hover:text-white">
                  Vision
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Shop */}
          <div className="flex flex-col">
            <h3 className="text-2xl mb-2 font-serif">SHOP</h3>
            <ul className="space-y-2">
              {" "}
              {/* Added space-y-2 for vertical spacing */}
              <li>
                <a href="#" className="font-sans hover:text-white">
                  Scents
                </a>
              </li>
              <li>
                <a href="#" className="font-sans hover:text-white">
                  Makeup
                </a>
              </li>
              <li>
                <a href="#" className="font-sans hover:text-white">
                  Beard Gang
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Address */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-serif mb-2">ADDRESS</h3>
            <ul className="space-y-2">
              {" "}
              {/* Added space-y-2 for vertical spacing */}
              <li>
                <span className="font-sans">Ngong Lane Plaza</span>
              </li>
              <li>
                <span className="font-sans">0724567355</span>
              </li>
              <li>
                <span className="font-sans">glamorousheave@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
