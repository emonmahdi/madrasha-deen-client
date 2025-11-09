import React from "react";
import { Menu } from "lucide-react"; 
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";

const DashboardNavbar = ({ setSidebarOpen }) => {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-800 shadow px-6 py-3 sticky top-0 z-40">
      <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
        <Menu size={22} className="text-gray-700 dark:text-gray-200" />
      </button>

      <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        Welcome, {user?.displayName || "User"}
      </h1>

      <span className="text-lg font-semibold text-gray-800 dark:text-gray-100"><Link to='/'>Visit Site</Link></span>

      <img
        src={user?.photoURL || "https://via.placeholder.com/40"}
        alt="user"
        className="w-10 h-10 rounded-full border-2 border-blue-500"
      />
    </header>
  );
};

export default DashboardNavbar;
