import React from "react";
import { motion } from "motion/react";
import { FaMosque, FaBookOpen, FaUsers, FaHandshake } from "react-icons/fa"; // ✅ fixed icons

const About = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4">
            About <span className="text-green-600 dark:text-green-400">MadrashaDeen</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            A complete Islamic Educational Management Platform that connects Students, Teachers, and Madrashas — all under one digital system.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-700 dark:text-green-400">
              Building the Future of Islamic Education
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              MadrashaConnect aims to simplify the way Islamic Madrashas operate by bringing the entire system online — 
              from admission to classes, from payment to result management, and even organizing waz mahfils or competitions.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              It helps students and guardians apply easily, teachers to manage lessons effectively, 
              and administrators to monitor everything in one dashboard.
            </p>

            {/* Key Values */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md rounded-2xl py-6 px-4 transition"
              >
                <FaMosque className="text-4xl text-blue-600 dark:text-blue-400 mb-3" />
                <h4 className="font-semibold text-lg">Faith-Based</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Inspired by Islamic values and designed for spiritual growth.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md rounded-2xl py-6 px-4 transition"
              >
                <FaBookOpen className="text-4xl text-green-600 dark:text-green-400 mb-3" /> {/* ✅ changed FaBookQuran → FaBookOpen */}
                <h4 className="font-semibold text-lg">Knowledge</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Empowering students with authentic Islamic education.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md rounded-2xl py-6 px-4 transition"
              >
                <FaUsers className="text-4xl text-yellow-500 dark:text-yellow-400 mb-3" />
                <h4 className="font-semibold text-lg">Community</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Uniting students, teachers, and madrashas in one platform.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md rounded-2xl py-6 px-4 transition"
              >
                <FaHandshake className="text-4xl text-indigo-500 dark:text-indigo-400 mb-3" />
                <h4 className="font-semibold text-lg">Trust</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Reliable, transparent, and secure system for all.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5234/5234376.png"
                alt="Madrasha illustration"
                className="w-80 md:w-96 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-green-500/20 dark:bg-green-400/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
