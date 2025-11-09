// // src/layouts/DashboardLayout.jsx
// import React, { useState } from "react";
// import { Outlet, NavLink } from "react-router";
// import { Menu, X, LayoutDashboard, LogOut } from "lucide-react";
// import useAuth from "../hooks/useAuth";

// const DashboardLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const { logOut, user } = useAuth();

//   return (
//     <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
//       {/* Sidebar */}
//       <aside
//         className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-700 to-blue-900 text-white transform ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 md:translate-x-0`}
//       >
//         <div className="flex justify-between items-center p-4 border-b border-blue-600">
//           <h2 className="text-xl font-bold">Dashboard</h2>
//           <button onClick={() => setSidebarOpen(false)} className="md:hidden">
//             <X size={20} />
//           </button>
//         </div>

//         <nav className="mt-6 space-y-2 px-3">
//           <NavLink
//             to="/dashboard"
//             className={({ isActive }) =>
//               `flex items-center gap-2 px-3 py-2 rounded-lg transition ${
//                 isActive ? "bg-blue-800" : "hover:bg-blue-700"
//               }`
//             }
//           >
//             <LayoutDashboard size={18} /> Dashboard Home
//           </NavLink>

//           <button
//             onClick={logOut}
//             className="flex items-center gap-2 px-3 py-2 w-full text-left rounded-lg hover:bg-blue-700"
//           >
//             <LogOut size={18} /> Log Out
//           </button>
//         </nav>
//       </aside>

//       {/* Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <header className="flex justify-between items-center bg-white dark:bg-gray-800 shadow p-4 md:px-6">
//           <button
//             className="md:hidden text-gray-700 dark:text-gray-200"
//             onClick={() => setSidebarOpen(true)}
//           >
//             <Menu size={22} />
//           </button>

//           <h1 className="text-lg font-semibold">
//             Welcome, {user?.displayName || "User"}
//           </h1>

//           <img
//             src={user?.photoURL || "https://via.placeholder.com/40"}
//             alt="user"
//             className="w-10 h-10 rounded-full border-2 border-blue-600"
//           />
//         </header>

//         <main className="flex-1 p-6 overflow-y-auto">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;


import React, { useState } from "react"; 
import { Outlet } from "react-router";
import DashboardSidebar from "../pages/Dashboard/DashboardSidebar";
import DashboardNavbar from "../pages/Dashboard/DashboardNavbar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardNavbar setSidebarOpen={setSidebarOpen} />
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
