import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Abdur Rahman",
    review:
      "MadrashaConnect has made admission so easy! I enrolled my son online, and the process was smooth and transparent.",
    rating: 5,
    img: "https://i.ibb.co/ZJdHP9m/student1.jpg",
  },
  {
    id: 2,
    name: "Fatema Binte Noor",
    review:
      "The online result system and teacher communication are excellent. A real blessing for Islamic education.",
    rating: 4,
    img: "https://i.ibb.co/TTsjsdn/student2.jpg",
  },
  {
    id: 3,
    name: "Muhammad Hasan",
    review:
      "Best madrasha management system! The donation and event updates keep us connected all the time.",
    rating: 5,
    img: "https://i.ibb.co/hfVkPvC/student3.jpg",
  },
];

const Testimonials = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection) => {
    setIndex(([prevIndex]) => {
      const newIndex = (prevIndex + newDirection + testimonials.length) % testimonials.length;
      return [newIndex, newDirection];
    });
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.45, 0, 0.55, 1], // smooth easing
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-700">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500 mb-10">
          What Our Students Say
        </h2>

        <div className="relative flex justify-center items-center">
          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 md:left-8 p-3 rounded-full bg-gray-700/40 hover:bg-teal-500 text-white transition-all duration-300 z-20"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Main Slide */}
          <div className="relative w-full flex justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative bg-white dark:bg-gray-800/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 md:p-10 w-full max-w-2xl mx-auto border border-gray-200/40 dark:border-gray-700/40"
              >
                <div className="flex justify-center mb-4">
                  <FaQuoteLeft className="text-teal-400 text-3xl mr-2" />
                </div>

                <motion.p
                  className="text-gray-700 dark:text-gray-300 text-lg italic mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {testimonials[index].review}
                </motion.p>

                <div className="flex justify-center mb-4">
                  <motion.img
                    key={testimonials[index].img}
                    src={testimonials[index].img}
                    alt={testimonials[index].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-teal-400 shadow-md"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                  {testimonials[index].name}
                </h3>

                <div className="flex justify-center text-teal-400 mb-4">
                  {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <FaQuoteRight className="text-teal-400 text-2xl absolute bottom-6 right-6 opacity-60" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 md:right-8 p-3 rounded-full bg-gray-700/40 hover:bg-teal-500 text-white transition-all duration-300 z-20"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-gradient-to-r from-teal-400 to-emerald-400 w-6" : "bg-gray-400 dark:bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
