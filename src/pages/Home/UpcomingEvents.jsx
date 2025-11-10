/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "motion/react";
import {
  FaCalendarWeek,
  FaMosque,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const events = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=600&q=60",
    title: "Islamic Waz Mahfil 2025",
    date: "15 December 2025",
    time: "8:00 PM",
    location: "Barisal Central Madrasha",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=600&q=60",
    title: "Quran Recitation Competition",
    date: "20 January 2026",
    time: "10:00 AM",
    location: "Dhaka Islamic Academy",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1580041065739-7a8b8c5c6a6e?auto=format&fit=crop&w=600&q=60",
    title: "Seerah Conference 2026",
    date: "10 February 2026",
    time: "6:30 PM",
    location: "Chittagong Grand Mosque",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6 md:px-12 lg:px-24 transition-colors duration-500">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400"
        >
          Upcoming Events & Waz Mahfil
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-500 dark:text-gray-400 mt-3 text-lg"
        >
          Stay connected with our upcoming Islamic programs, competitions, and
          waz mahfils.
        </motion.p>
      </div>

      {/* Event Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-teal-400/30 transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {event.title}
              </h3>

              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <FaCalendarWeek className="text-teal-500" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <FaClock className="text-teal-500" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt className="text-teal-500" />
                <span>{event.location}</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-4 inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                <FaMosque /> Join Event
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See All Button */}
      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-teal-400/40 transition"
        >
          See All Events
        </motion.button>
      </div>
    </section>
  );
};

export default UpcomingEvents;
