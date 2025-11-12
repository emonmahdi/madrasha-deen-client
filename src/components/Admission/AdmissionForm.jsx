// import React from "react";
// import { useForm } from "react-hook-form";
// import { useParams, useNavigate } from "react-router";
// import Swal from "sweetalert2";
// import { qaumiClassesFullData } from "../../assets/data/qaumiClassesFullData";

// const AdmissionForm = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { register, handleSubmit, reset, formState: { errors } } = useForm();

//   const selectedClass = qaumiClassesFullData.find(
//     (cls) => cls.id === parseInt(id)
//   );

//   if (!selectedClass) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
//         <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
//           Class not found.
//         </h2>
//       </div>
//     );
//   }

//   const onSubmit = (data) => {
//     const submittedData = { ...data, appliedClass: selectedClass.name };
//     console.log("🎓 Admission Application Submitted:", submittedData);

//     Swal.fire({
//       icon: "success",
//       title: "ভর্তি আবেদন সম্পন্ন হয়েছে!",
//       text: `${selectedClass.name} ক্লাসে আপনার আবেদন গ্রহণ করা হয়েছে।`,
//       confirmButtonColor: "#10B981",
//     });

//     reset();
//     navigate(`/admission-details/${selectedClass.id}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 transition-colors duration-300">
//       <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-all duration-300">
//         {/* Header Section */}
//         <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-gray-100">
//           ভর্তি আবেদন ফরম
//         </h1>
//         <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
//           নিচের ফরমটি পূরণ করুন — <span className="text-emerald-500 font-medium">{selectedClass.name}</span> ক্লাসে ভর্তি হতে।
//         </p>

//         {/* Class Info Section */}
//         <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-lg mb-8">
//           <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
//             নির্বাচিত ক্লাস: {selectedClass.name}
//           </h3>
//           <p className="text-gray-700 dark:text-gray-300">
//             শিক্ষক: {selectedClass.teacher} | সময়কাল: {selectedClass.duration} | ফি: {selectedClass.fee}
//           </p>
//         </div>

//         {/* Form Section */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           {/* Name */}
//           <div>
//             <label className="block text-gray-800 dark:text-gray-200 mb-1">
//               শিক্ষার্থীর নাম
//             </label>
//             <input
//               {...register("studentName", { required: "নাম অবশ্যই দিতে হবে" })}
//               placeholder="শিক্ষার্থীর পূর্ণ নাম লিখুন"
//               className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
//             />
//             {errors.studentName && (
//               <p className="text-red-500 text-sm mt-1">{errors.studentName.message}</p>
//             )}
//           </div>

//           {/* Father's Name */}
//           <div>
//             <label className="block text-gray-800 dark:text-gray-200 mb-1">
//               পিতার নাম
//             </label>
//             <input
//               {...register("fatherName", { required: "পিতার নাম দিন" })}
//               placeholder="পিতার নাম লিখুন"
//               className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
//             />
//             {errors.fatherName && (
//               <p className="text-red-500 text-sm mt-1">{errors.fatherName.message}</p>
//             )}
//           </div>

//           {/* Contact Number */}
//           <div>
//             <label className="block text-gray-800 dark:text-gray-200 mb-1">
//               যোগাযোগের নাম্বার
//             </label>
//             <input
//               type="tel"
//               {...register("contactNumber", {
//                 required: "যোগাযোগের নাম্বার দিন",
//                 pattern: { value: /^[0-9]{11}$/, message: "১১ সংখ্যার ফোন নাম্বার দিন" },
//               })}
//               placeholder="01XXXXXXXXX"
//               className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
//             />
//             {errors.contactNumber && (
//               <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>
//             )}
//           </div>

//           {/* Address */}
//           <div>
//             <label className="block text-gray-800 dark:text-gray-200 mb-1">
//               ঠিকানা
//             </label>
//             <textarea
//               {...register("address", { required: "ঠিকানা দিন" })}
//               rows="3"
//               placeholder="বর্তমান ঠিকানা লিখুন"
//               className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
//             ></textarea>
//             {errors.address && (
//               <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
//             )}
//           </div>

//           {/* Preferred Timing */}
//           <div>
//             <label className="block text-gray-800 dark:text-gray-200 mb-1">
//               অধ্যয়নের সময় পছন্দ
//             </label>
//             <select
//               {...register("preferredTime", { required: "সময় নির্বাচন করুন" })}
//               className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
//             >
//               <option value="">সময় নির্বাচন করুন</option>
//               <option value="morning">সকাল</option>
//               <option value="afternoon">বিকাল</option>
//               <option value="evening">সন্ধ্যা</option>
//             </select>
//             {errors.preferredTime && (
//               <p className="text-red-500 text-sm mt-1">{errors.preferredTime.message}</p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-all"
//             >
//               আবেদন জমা দিন
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdmissionForm;

import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { apiClient } from "../../hooks/apiClient";
import { useAuth } from "../../hooks/useAuth";

const AdmissionForm = () => {
  const { user } = useAuth();
  const classData = useLoaderData();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (!classData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Class not found.
        </h2>
      </div>
    );
  }

  const onSubmit = async (data) => {
    const submittedData = {
      ...data,
      appliedClassId: classData._id,
      appliedClassName: classData.name,
      classTeacher: classData.teacher,
      classDuration: classData.duration,
      classFee: classData.fee,
      status: "pending",
      userEmail: user?.email,
      created_At: new Date().toISOString(),
    };

    try {
      const res = await apiClient.post("/admissions", submittedData);

      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "ভর্তি আবেদন সম্পন্ন হয়েছে!",
          text: `${classData.name} ক্লাসে আপনার আবেদন গ্রহণ করা হয়েছে।`,
          confirmButtonColor: "#10B981",
        });
        reset();
        navigate(`/admission-details/${classData._id}`);
      }
    } catch (error) {
      console.error("Admission submit error:", error);
      Swal.fire({
        icon: "error",
        title: "আবেদন ব্যর্থ!",
        text: "সার্ভারের সাথে সমস্যা হয়েছে, আবার চেষ্টা করুন।",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 transition-colors duration-300">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-all duration-300">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-gray-100">
          ভর্তি আবেদন ফরম
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
          নিচের ফরমটি পূরণ করুন —{" "}
          <span className="text-emerald-500 font-medium">{classData.name}</span>{" "}
          ক্লাসে ভর্তি হতে।
        </p>

        {/* Class Info Section */}
        <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-lg mb-8">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            নির্বাচিত ক্লাস: {classData.name}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            শিক্ষক: {classData.teacher} | সময়কাল: {classData.duration} | ফি:{" "}
            {classData.fee}
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-800 dark:text-gray-200 mb-1">
              শিক্ষার্থীর নাম
            </label>
            <input
              {...register("studentName", { required: "নাম অবশ্যই দিতে হবে" })}
              placeholder="শিক্ষার্থীর পূর্ণ নাম লিখুন"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
            {errors.studentName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.studentName.message}
              </p>
            )}
          </div>

          {/* Father's Name */}
          <div>
            <label className="block text-gray-800 dark:text-gray-200 mb-1">
              পিতার নাম
            </label>
            <input
              {...register("fatherName", { required: "পিতার নাম দিন" })}
              placeholder="পিতার নাম লিখুন"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
            {errors.fatherName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fatherName.message}
              </p>
            )}
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-gray-800 dark:text-gray-200 mb-1">
              যোগাযোগের নাম্বার
            </label>
            <input
              type="tel"
              {...register("contactNumber", {
                required: "যোগাযোগের নাম্বার দিন",
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: "১১ সংখ্যার ফোন নাম্বার দিন",
                },
              })}
              placeholder="01XXXXXXXXX"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contactNumber.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-800 dark:text-gray-200 mb-1">
              ঠিকানা
            </label>
            <textarea
              {...register("address", { required: "ঠিকানা দিন" })}
              rows="3"
              placeholder="বর্তমান ঠিকানা লিখুন"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Preferred Timing */}
          <div>
            <label className="block text-gray-800 dark:text-gray-200 mb-1">
              অধ্যয়নের সময় পছন্দ
            </label>
            <select
              {...register("preferredTime", { required: "সময় নির্বাচন করুন" })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            >
              <option value="">সময় নির্বাচন করুন</option>
              <option value="morning">সকাল</option>
              <option value="afternoon">বিকাল</option>
              <option value="evening">সন্ধ্যা</option>
            </select>
            {errors.preferredTime && (
              <p className="text-red-500 text-sm mt-1">
                {errors.preferredTime.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-all"
            >
              আবেদন জমা দিন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
