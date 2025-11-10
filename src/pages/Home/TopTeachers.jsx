import React from "react";
import { motion } from "motion/react";
import { FaUserTie, FaBookOpen, FaStar } from "react-icons/fa";

import teacherImg1 from '../../assets/abbasi.jpg'
import teacherImg2 from '../../assets/saide.jpeg'
import teacherImg3 from '../../assets/mizanurrahman.png'

const teachers = [
  {
    id: 1,
    name: "Maulana Abdul Karim",
    subject: "Hadith & Islamic Studies",
    image: teacherImg1,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Mufti Ehsan Ullah",
    subject: "Tafsir & Quran",
    image: teacherImg2,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Maulana Farid Ahmed",
    subject: "Fiqh & Islamic Law",
    image: teacherImg3,
    rating: 4.7,
  },
];

const TopTeachers = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6 md:px-12 lg:px-24 transition-colors duration-500">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400"
        >
          Our Top Teachers & Scholars
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-500 dark:text-gray-400 mt-3 text-lg"
        >
          Learn from our most respected scholars — experts in Hadith, Tafsir, and Fiqh.
        </motion.p>
      </div>

      {/* Teachers Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher, index) => (
          <motion.div
            key={teacher.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-teal-400/30 border border-gray-200 dark:border-gray-700 hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 space-y-3 text-center">
              <FaUserTie className="text-3xl text-teal-500 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {teacher.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{teacher.subject}</p>

              <div className="flex justify-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.round(teacher.rating) ? "opacity-100" : "opacity-30"}
                  />
                ))}
              </div>

              <p className="text-sm text-gray-400">Rating: {teacher.rating}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-teal-400/40 transition"
        >
          Apply as Teacher
        </motion.button>
      </div>
    </section>
  );
};

export default TopTeachers;
