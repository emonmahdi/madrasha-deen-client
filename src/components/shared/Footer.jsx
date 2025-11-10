import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-12 px-6 md:px-16 transition-colors duration-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 mb-3">
            MadrashaDeen
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            A digital Islamic education management system connecting students,
            teachers, and madrashas across Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-teal-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-teal-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/admission"
                className="hover:text-teal-400 transition-colors"
              >
                Admission
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-teal-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2 inline-block">
            Contact Info
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-teal-400" /> info@MadrashaDeen.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaPhone className="text-teal-400" /> +880 1700 123 456
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-teal-400" /> Barishal, Bangladesh
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2 inline-block">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="p-3 rounded-full bg-gray-700/40 hover:bg-teal-500 transition-all duration-300"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gray-700/40 hover:bg-red-500 transition-all duration-300"
            >
              <FaYoutube className="text-xl" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gray-700/40 hover:bg-green-500 transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gray-700/40 hover:bg-sky-500 transition-all duration-300"
            >
              <FaTelegram className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-teal-400 font-semibold">MadrashaDeen</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
