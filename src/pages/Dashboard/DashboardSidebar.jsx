import { NavLink } from "react-router";
import { LayoutDashboard, User, Settings, LogOut, X } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { logOut } = useAuth();

  const getActiveClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
      isActive
        ? "bg-blue-900 text-white font-semibold"
        : "hover:bg-blue-700 text-gray-100"
    }`;

  return (
    <aside
      className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 md:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl font-bold">My Dashboard</h2>
        <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
          <X size={20} />
        </button>
      </div>

      <nav className="mt-6 space-y-3 px-4">
        <NavLink to="/dashboard" end className={getActiveClass}>
          <LayoutDashboard size={18} /> Home
        </NavLink>

        <NavLink to="/dashboard/my-admission" className={getActiveClass}>
          <User size={18} /> My Admission
        </NavLink>

        <NavLink to="/dashboard/profile" className={getActiveClass}>
          <User size={18} /> Profile
        </NavLink>

        <NavLink to="/dashboard/settings" className={getActiveClass}>
          <Settings size={18} /> Settings
        </NavLink>

        <button
          onClick={logOut}
          className="flex items-center gap-2 px-3 py-2 w-full text-left hover:bg-blue-700 rounded-lg"
        >
          <LogOut size={18} /> Log Out
        </button>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
