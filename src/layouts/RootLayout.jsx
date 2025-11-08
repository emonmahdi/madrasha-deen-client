import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col dark:bg-gray-900 text-gray-800 dark:text-gray-100  ">
      <Navbar />
      <main className="grow container dark:bg-gray-900 text-gray-800 mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
