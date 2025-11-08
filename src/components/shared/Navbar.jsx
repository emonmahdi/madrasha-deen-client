// src/components/shared/Navbar.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const { user, logOut } = useAuth();
  console.log(user);

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("User logged out");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/events", label: "Events" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 dark:shadow-[#3d3c3c] shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-blue-600 dark:text-blue-400"
        >
          MadrashaConnect
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <ul className="flex gap-x-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="px-3 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-3">
          <button className="hidden md:inline px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">
            Become a Teacher
          </button>
          <Link
            to="/login"
            className="hidden md:inline px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Login / Register
          </Link>

          {/* Dark/Light toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 text-xl" />
            ) : (
              <FaMoon className="text-gray-600 dark:text-gray-300 text-xl" />
            )}
          </button>

          {/* Mobile menu */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col space-y-2 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* conditional log out button */}
            {user && user.email ? (
              <>
                {/* Show user photo or name if available */}
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-8 h-8 rounded-full border border-gray-300"
                  />
                )}
                <span className="hidden md:inline text-sm font-medium">
                  {user.displayName || user.email}
                </span>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800 transition"
                >
                  Login / Register
                </Link>
              </li>
            )}
            <li>
              <button
                className="w-full text-left px-3 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
                onClick={() => setMenuOpen(false)}
              >
                Become a Teacher
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
