import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt, // Dashboard
  FaCog, // Settings
  FaUserPlus, // New Hire
  FaUsers, // Customers
  FaLock, // Roles and Permissions
  FaBullhorn, // Marketing
  FaWarehouse, // Inventory
} from "react-icons/fa";
import logo from "/src/assets/logo.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("https://hr-hub-backend.onrender.com/employees", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API returns the currently logged-in employee's data
        setEmployee(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("role");
    navigate("/signin");
  };

  return (
    <div className="bg-secondary text-textprimary w-half h-[100vh] flex flex-col p-[20px] justify-between font-body m-0 text-center lg:text-left items-center lg:items-start">
      <div className="gap-[50px]">
        <div className="flex flex-col items-center gap-[20px] ">
          <img
            src={logo}
            alt="logo"
            className="w-[130px] h-[64px] max-w-full"
          />
          <hr className="border-[1px] border-secondary w-full" />
        </div>
        <div className="flex flex-col gap-[20px] py-[30px]">
          <div>
            <ul className="flex flex-col gap-[25px]">
              <li>
                <Link
                  to="/dashboard"
                  className="flex gap-[10px] hover:text-textsecondary"
                >
                  <FaTachometerAlt className="w-7 h-7" />
                  <span className="pt-1">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="flex gap-[10px] hover:text-textsecondary"
                >
                  <FaCog className="w-7 h-7" />
                  <span className="pt-1">Settings</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/newhire"
                  className="flex gap-[10px] hover:text-textsecondary"
                >
                  <FaUserPlus className="w-7 h-7" />
                  <span className="pt-1">New Hire</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/customers"
                  className="flex gap-[10px] hover:text-textsecondary"
                >
                  <FaUsers className="w-7 h-7" />
                  <span className="pt-1">Customers</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/rolespermissions"
                  className="flex gap-[10px] hover:text-textsecondary"
                >
                  <FaLock className="w-7 h-7" />
                  <span className="pt-1">Roles and Permissions</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/marketing"
                  className="flex gap-[10px] hover:text-textsecondary"
                >
                  <FaBullhorn className="w-7 h-7" />
                  <span className="pt-1">Marketing</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/inventory"
                  className="flex gap-[10px] hover:text-textsecondary"
                >
                  <FaWarehouse className="w-7 h-7" />
                  <span className="pt-1">Inventory</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-[5px] flex flex-col gap-[25px] text-center lg:text-left items-center lg:items-start">
        <div className="flex ml-2 -mb-4">
          {employee ? (
            <div className="flex gap-[15px] p-[10px]">
              <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <h1 className="text-[16px] font-bold text-Heading dark:text-primary-light">
                  {employee.name}
                </h1>
                <h1 className="text-[11px] font-bold text-Heading dark:text-primary-light">
                  {employee.department}
                </h1>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-secondary text-sm">Loading...</p>
            </div>
          )}
        </div>
        <button
          className="bg-secondary text-primary-light hover:text-textsecondary px-[10px] py-[5px] rounded-[5px] text-[15px]"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
