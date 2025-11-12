import React  from "react"; 
import {useAuth} from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../hooks/apiClient";
import Loader from "../../components/ui/Loader";

const MyAdmissions = () => { 
    const {user} = useAuth(); 
  console.log(user)

    // useEffect(() => {
    //     console.log("Global user:", user);
    //   }, [user]);

    console.log(user?.email)

    const {data: admissions = [], error, isError, isLoading} = useQuery({
        queryKey: ['admissions', user?.email],
        queryFn: async() => {
            const res = await apiClient.get(`/admissions?email=${user?.email}` );
            return res?.data;
        }
    })

    if (isLoading)
        return (
          <div className="flex justify-center items-center h-[80vh] dark:bg-gray-900 bg-gray-50">
            <Loader className="animate-spin text-emerald-500 w-10 h-10" />
          </div>
        );
    
      if (isError)
        return (
          <div className="text-center mt-20 text-red-500">
            ⚠️ Something went wrong: {error.message}
          </div>
        );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-10 transition-all duration-300">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
        🎓 My Admission Applications
      </h1>

      {admissions.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No admission found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {admissions.map((admission) => (
            <div
              key={admission._id}
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                {admission.appliedClassName}
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mt-2">
                <p>👨‍🏫 Teacher: {admission.classTeacher}</p>
                <p>⏰ Duration: {admission.classDuration}</p>
                <p>💰 Fee: {admission.classFee}</p>
                <p>📅 Applied: {new Date(admission.created_At).toLocaleString()}</p>
                <p>
                  🔖 Status:{" "}
                  <span
                    className={`font-medium ${
                      admission.status === "approved"
                        ? "text-emerald-500"
                        : admission.status === "rejected"
                        ? "text-red-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {admission.status}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAdmissions;
