import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Settings from "./pages/Admin/Settings";
import Dashboard from "./pages/Admin/Dashboard";
import Newhire from "./pages/Admin/Newhire";
import Customer from "./pages/Admin/Customer";
import Rolesandpermissions from "./pages/Admin/Rolesandpermissions";
import Marketing from "./pages/Admin/Marketing";
import Inventory from "./pages/Admin/Inventory";
import Sidebar from "./components/AdminSidebar";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content can go here */}
      <main className="flex-grow">
        {/* For now, you can leave this empty or add a placeholder */}
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold">Main Content</h1>
          <p className="text-lg mt-4">Your content will go here.</p>
        </div>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default App;