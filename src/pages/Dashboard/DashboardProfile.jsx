import React from "react";
import { useAuth } from "../../hooks/useAuth";

const DashboardProfile = () => {
  const { user } = useAuth();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-6">
        👤 My Profile
      </h2>

      {/* Profile Card */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

          {/* Profile Avatar */}
          <img
            src={user?.photoURL || "https://i.ibb.co/3p8tJ7T/avatar.png"}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-teal-500 shadow-md object-cover"
          />

          {/* Profile Info */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
              {user?.displayName || "No Name Provided"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="p-4 bg-gray-50 dark:bg-gray-700/40 rounded-xl border border-gray-200 dark:border-gray-600">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">
                  Email
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  {user?.email}
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700/40 rounded-xl border border-gray-200 dark:border-gray-600">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">
                  Account Created
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  {user?.metadata?.creationTime
                    ? new Date(user?.metadata?.creationTime).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700/40 rounded-xl border border-gray-200 dark:border-gray-600">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">
                  Last Login
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  {user?.metadata?.lastSignInTime
                    ? new Date(user?.metadata?.lastSignInTime).toLocaleString()
                    : "N/A"}
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700/40 rounded-xl border border-gray-200 dark:border-gray-600">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">
                  Role
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  Student / User
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Buttons */}
      <div className="mt-6 flex flex-wrap gap-3">
        <button className="px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition shadow">
          Edit Profile
        </button>
        <button className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-800 transition shadow">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default DashboardProfile;
