/* eslint-disable no-unused-vars */
// src/components/admission/AdmissionCards.jsx
import React from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  FaBook,
  FaChalkboardTeacher,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";

import { qaumiClassesFullData } from "../../assets/data/qaumiClassesFullData";

// const dummyClasses = [
//   {
//     id: 1,
//     name: "Quran & Tajweed",
//     teacher: "Mufti Abdullah",
//     duration: "6 Months",
//     fee: "2000 BDT",
//     image: "https://images.unsplash.com/photo-1590080875831-b3d65f69c1a4",
//   },
//   {
//     id: 2,
//     name: "Hadith Studies",
//     teacher: "Maulana Imran Hossain",
//     duration: "8 Months",
//     fee: "2500 BDT",
//     image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
//   },
//   {
//     id: 3,
//     name: "Fiqh & Islamic Law",
//     teacher: "Mufti Rezaul Karim",
//     duration: "10 Months",
//     fee: "3000 BDT",
//     image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
//   },
// ];

const AdmissionCards = () => {
  const navigate = useNavigate();

  const handleApply = (cls) => {
    navigate("/admission-form", { state: { classData: cls } });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6 md:px-12 lg:px-24 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400 mb-8"
        >
          🎓 Madrasha Class Admission
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {qaumiClassesFullData.map((cls, index) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-teal-400/30 transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={cls.image}
                alt={cls.name}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 space-y-3 text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <FaBook className="text-teal-600 dark:text-teal-400" />{" "}
                  {cls.name}
                </h3>
                <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FaChalkboardTeacher className="text-teal-600 dark:text-teal-400" />{" "}
                  {cls.teacher}
                </p>
                <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FaClock className="text-teal-600 dark:text-teal-400" />{" "}
                  {cls.duration}
                </p>
                <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FaMoneyBillWave className="text-teal-600 dark:text-teal-400" />{" "}
                  {cls.fee}
                </p>

                <Link to={`/admission-details/${cls.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 inline-flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg w-full font-semibold transition"
                  >
                    Details
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionCards;
