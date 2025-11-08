import React from "react";
import { motion } from "motion/react";
import bannerImg from "../assets/bannerImg.png";

const Banner = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Side (Text) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 leading-tight">
            Connect with Islamic Scholars <br /> & Learn from Anywhere
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-md mx-auto md:mx-0">
            Join our online Madrasha programs, explore events, and expand your
            Islamic knowledge through modern digital learning.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">
              Explore Courses
            </button>
          </div>
        </motion.div>

        {/* Right Side (Animated Image) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0 flex justify-center relative"
        >
          {/* Floating animation */}
          <motion.img
            src={bannerImg}
            alt="Madrasha illustration"
            className="w-3/4 md:w-full max-w-md drop-shadow-xl"
            animate={{
              y: [0, -15, 0], // up-down floating
              rotate: [0, 1, -1, 0], // subtle rotation
              scale: [1, 1.02, 1], // slight zoom in/out
            }}
            transition={{
              duration: 6, // smooth long cycle
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />

          {/* Optional background glow effect */}
          <motion.div
            className="absolute inset-0 -z-10 blur-3xl bg-blue-300/20 dark:bg-blue-500/10 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
