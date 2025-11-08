// src/components/shared/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center sm:flex sm:justify-between sm:items-center">
        <p className="text-sm">&copy; 2025 MadrashaConnect. All rights reserved.</p>
        <div className="mt-3 sm:mt-0 space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
