import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CheckCircle, XCircle } from "lucide-react";
import Swal from "sweetalert2";
import { apiClient } from "../../hooks/apiClient";
import Loader from "../../components/ui/Loader";

const AllAdmissions = () => {
  const queryClient = useQueryClient();

  // 🔹 Fetch all admissions
  const { data: admissions = [], isLoading, isError } = useQuery({
    queryKey: ["all-admissions"],
    queryFn: async () => {
      const res = await apiClient.get("/all-admissions");
      return res.data;
    },
  });

  // 🔹 Mutation for status update
  const updateStatus = useMutation({
    mutationFn: async ({ id, status }) =>
      apiClient.patch(`/admissions/${id}`, { status }),

    onSuccess: (_, { status }) => {
      queryClient.invalidateQueries(["all-admissions"]);

      Swal.fire({
        title: "✅ Success!",
        text:
          status === "approved"
            ? "Admission approved successfully!"
            : "Admission rejected successfully!",
        icon: "success",
        confirmButtonColor: "#14b8a6", // teal-500
        timer: 2000,
        showConfirmButton: false,
        background: "#f0fdfa", // teal-50
        color: "#0f766e", // teal-700
      });
    },

    onError: (error) => {
      Swal.fire({
        title: "❌ Error!",
        text:
          error?.response?.data?.message ||
          "Failed to update admission status. Please try again.",
        icon: "error",
        confirmButtonColor: "#ef4444", // red-500
      });
      console.error(error);
    },
  });

  // 🔹 Handle with Confirm Alert
  const handleStatusChange = (id, status) => {
    Swal.fire({
      title: `Are you sure?`,
      text: `You are about to ${status} this admission.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: status === "approved" ? "#14b8a6" : "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: `Yes, ${status}!`,
    }).then((result) => {
      if (result.isConfirmed) {
        updateStatus.mutate({ id, status });
      }
    });
  };

  // 🔹 Loading State
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader className="animate-spin text-teal-500 w-10 h-10" />
      </div>
    );

  // 🔹 Error State
  if (isError)
    return (
      <p className="text-center text-red-500 mt-10">
        ⚠️ Failed to load admissions.
      </p>
    );

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400">
        📋 All Admissions
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Review and manage all student admission applications.
      </p>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow rounded-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="p-3">Student Name</th>
              <th className="p-3">Class</th>
              <th className="p-3">Fee</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admissions.map((a) => (
              <tr
                key={a._id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/40 transition-colors"
              >
                <td className="p-3 text-gray-900 dark:text-gray-200">
                  {a.studentName || "N/A"}
                </td>
                <td className="p-3 text-gray-900 dark:text-gray-200">
                  {a.appliedClassName}
                </td>
                <td className="p-3 text-gray-900 dark:text-gray-200">
                  {a.classFee}৳
                </td>
                <td className="p-3 font-semibold">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      a.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : a.status === "rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>
                <td className="p-3 flex items-center justify-center gap-2">
                  <button
                    onClick={() => handleStatusChange(a._id, "approved")}
                    disabled={updateStatus.isPending}
                    className="px-3 py-1 bg-teal-500 hover:bg-teal-600 text-white rounded-lg text-sm flex items-center gap-1 transition"
                  >
                    <CheckCircle size={16} /> Approve
                  </button>

                  <button
                    onClick={() => handleStatusChange(a._id, "rejected")}
                    disabled={updateStatus.isPending}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm flex items-center gap-1 transition"
                  >
                    <XCircle size={16} /> Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAdmissions;
