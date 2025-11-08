// src/pages/Home/Home.jsx
import React from "react";

const Home = () => {
  return (
    <section className="text-center py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Welcome to MadrashaConnect
      </h1>
      <p className="text-gray-700 max-w-xl mx-auto">
        Join online Madrasha programs, apply for admission, explore events, and
        connect with scholars.
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
};

export default Home;
