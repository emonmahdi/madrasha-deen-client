/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import {
  FaBook,
  FaChalkboardTeacher,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";
import Swal from "sweetalert2"; 
import { apiClient } from "../../hooks/apiClient";

const AddClassForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("📘 New Class Data:", data);

    try {
      const res = await apiClient.post("http://localhost:5000/classes", data);
      console.log("Server Response:", res.data);

      // ✅ Check insertedId safely
      if (res.data && res.data.insertedId) {
        await Swal.fire({
          icon: "success",
          title: "Class Added Successfully!",
          text: `${data.name} class has been added.`,
          confirmButtonColor: "#0d9488",
          background: document.documentElement.classList.contains("dark")
            ? "#1f2937"
            : "#fff",
          color: document.documentElement.classList.contains("dark")
            ? "#fff"
            : "#000",
        });

        // ✅ Reset after alert closes
        reset();
      } else {
        Swal.fire({
          icon: "info",
          title: "No Data Returned!",
          text: "The server didn't return an insertedId. Check backend response.",
        });
      }
    } catch (error) {
      console.error("❌ Error adding class:", error);

      Swal.fire({
        icon: "error",
        title: "Failed to Add Class!",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#e11d48",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-6 text-center">
          ➕ Add New Qaumi Class
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Class Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              <FaBook className="inline text-teal-500 mr-2" />
              Class Name
            </label>
            <input
              {...register("name", { required: "Class name is required" })}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="e.g. শিশু শ্রেণী"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Teacher */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              <FaChalkboardTeacher className="inline text-teal-500 mr-2" />
              Teacher Name
            </label>
            <input
              {...register("teacher", { required: "Teacher name is required" })}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="e.g. Mufti Abdullah"
            />
            {errors.teacher && (
              <p className="text-red-500 text-sm mt-1">
                {errors.teacher.message}
              </p>
            )}
          </div>

          {/* Duration */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              <FaClock className="inline text-teal-500 mr-2" />
              Duration
            </label>
            <input
              {...register("duration", { required: "Duration is required" })}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="e.g. 6 Months"
            />
            {errors.duration && (
              <p className="text-red-500 text-sm mt-1">
                {errors.duration.message}
              </p>
            )}
          </div>

          {/* Fee */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              <FaMoneyBillWave className="inline text-teal-500 mr-2" />
              Fee
            </label>
            <input
              {...register("fee", { required: "Fee is required" })}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="e.g. 3000 BDT"
            />
            {errors.fee && (
              <p className="text-red-500 text-sm mt-1">{errors.fee.message}</p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              📸 Image URL
            </label>
            <input
              {...register("image", { required: "Image URL is required" })}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="e.g. https://images.unsplash.com/photo..."
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              📝 Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Describe the class briefly..."
              rows="3"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
          >
            Add Class
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddClassForm;
