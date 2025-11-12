import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Users, CheckCircle, XCircle, Clock } from "lucide-react";

const DashboardHome = () => {
  // Demo statistics (তুমি চাইলে API থেকে fetch করে আনবে)
  const stats = [
    {
      title: "Total Students",
      value: 320,
      icon: <Users className="text-teal-500" />,
    },
    {
      title: "Approved Admissions",
      value: 210,
      icon: <CheckCircle className="text-green-500" />,
    },
    {
      title: "Pending Applications",
      value: 85,
      icon: <Clock className="text-yellow-500" />,
    },
    {
      title: "Rejected Applications",
      value: 25,
      icon: <XCircle className="text-red-500" />,
    },
  ];

  const chartData = [
    { month: "Jan", approved: 15, rejected: 5 },
    { month: "Feb", approved: 22, rejected: 4 },
    { month: "Mar", approved: 28, rejected: 6 },
    { month: "Apr", approved: 32, rejected: 3 },
    { month: "May", approved: 25, rejected: 7 },
    { month: "Jun", approved: 30, rejected: 5 },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400">
          Dashboard Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Welcome back, Admin 👋 — here's a quick snapshot of recent activity.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div className="text-4xl">{item.icon}</div>
              <div className="text-right">
                <p className="text-gray-500 text-sm">{item.title}</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {item.value}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Admission Trends (Last 6 Months)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                color: "#fff",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="approved" fill="#14b8a6" radius={[6, 6, 0, 0]} />
            <Bar dataKey="rejected" fill="#f87171" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardHome;
