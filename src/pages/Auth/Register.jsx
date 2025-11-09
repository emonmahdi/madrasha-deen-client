// src/pages/Auth/Register.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import bgImg from "../../assets/register.png";
import GoogleButton from "../../components/ui/GoogleButton";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Register Data:", data);

    try {
      const result = await createUser(data.email, data.password);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }

    // Example: await createUserWithEmailAndPassword(auth, data.email, data.password)
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Left Side - Form */}
      <motion.div
        className="md:w-1/2 flex flex-col justify-center px-8 py-12 max-w-lg mx-auto"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-extrabold mb-6 text-blue-700 dark:text-blue-400">
          Create a new account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              className={`w-full px-4 py-2 rounded border ${
                errors.name
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...register("name", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className={`w-full px-4 py-2 rounded border ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className={`w-full px-4 py-2 rounded border ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* 🔹 Register Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-70"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>

          {/* 🔹 Divider */}
          <div className="flex items-center gap-2 my-3">
            <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow" />
            <span className="text-sm text-gray-500">or</span>
            <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow" />
          </div>

          {/* 🔹 Google Sign-in Button */}
          <GoogleButton />
        </form>

        {/* Link to Login Page */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            Login here
          </Link>
        </p>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="md:w-1/2 flex items-center justify-center bg-blue-50 dark:bg-blue-900"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={bgImg}
          alt="Register Illustration"
          className="w-3/4 max-w-md"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default Register;
