import React from "react";
import { motion } from "motion/react";
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBookOpen,
  FaRegMoneyBillAlt,
  FaRegCalendarAlt,
  FaStar,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaUserGraduate className="text-4xl text-teal-500" />,
    title: "Online Student Admission",
    desc: "Students can easily apply and enroll in Madrasha courses online, saving time and paperwork.",
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher className="text-4xl text-teal-500" />,
    title: "Teacher Application & Management",
    desc: "Teachers or Hujurs can apply online and manage their teaching schedules with ease.",
  },
  {
    id: 3,
    icon: <FaBookOpen className="text-4xl text-teal-500" />,
    title: "Class & Result System",
    desc: "Admins can manage classes, upload results, and monitor student progress effortlessly.",
  },
  {
    id: 4,
    icon: <FaRegMoneyBillAlt className="text-4xl text-teal-500" />,
    title: "Online Payment & Donation",
    desc: "Students and guardians can make secure online payments and donations via the system.",
  },
  {
    id: 5,
    icon: <FaRegCalendarAlt className="text-4xl text-teal-500" />,
    title: "Events & Waz Management",
    desc: "Create, manage, and publish upcoming Islamic events like waz, competitions, and seerah programs.",
  },
  {
    id: 6,
    icon: <FaStar className="text-4xl text-teal-500" />,
    title: "Review & Feedback",
    desc: "Students and parents can provide valuable reviews about teachers and madrasha management.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6 md:px-12 lg:px-24 transition-colors duration-500">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400"
        >
          Our Core Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-500 dark:text-gray-400 mt-3 text-lg"
        >
          Empowering Madrashas with digital transformation — simple, smart, and connected.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="rounded-2xl p-8 shadow-lg bg-white dark:bg-gray-800 
                       hover:shadow-teal-400/40 hover:-translate-y-2 transition-all 
                       duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-teal-50 dark:bg-gray-700 p-4 rounded-full shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
