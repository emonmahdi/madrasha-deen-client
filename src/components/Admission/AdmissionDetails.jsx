import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const AdmissionDetails = () => {
  const classData = useLoaderData();
  console.log(classData);
  const navigate = useNavigate();

  if (!classData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Class not found.
        </h2>
      </div>
    );
  }

  const {
    _id,
    name,
    teacher,
    duration,
    fee,
    image,
    syllabus = [],
    description,
    benefits = [],
  } = classData;
  console.log(_id);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={image}
            alt={name}
            className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Class Info Section */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {name}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
            <p className="text-gray-800 dark:text-gray-200">
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                শিক্ষক:
              </span>{" "}
              {teacher}
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                সময়কাল:
              </span>{" "}
              {duration}
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                ফি:
              </span>{" "}
              {fee}
            </p>
          </div>

          {/* Apply Button */}
          <button
            onClick={() => navigate(`/admission-form/${_id}`)}
            className="mt-4 inline-flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg w-full font-semibold transition"
          >
            ভর্তি আবেদন করুন
          </button>
        </div>
      </div>

      {/* Syllabus Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
          পাঠ্যসূচি (Syllabus)
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-300">
          {syllabus?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
          ভর্তি হওয়ার উপকারিতা
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-300">
          {benefits?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
     
  );
};

export default AdmissionDetails;

// import React from "react";
// import { useLoaderData } from "react-router";

// const AdmissionDetails = () => {
//   const classData = useLoaderData(); // ✅ This now contains the single object
//   console.log("Loaded Class Data:", classData);

//   return (
//     <div className="p-6 bg-white dark:bg-gray-900 text-black dark:text-gray-200">
//       <h1 className="text-2xl font-bold mb-4">Single Class Data</h1>

//       <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
//         {JSON.stringify(classData, null, 2)}
//       </pre>

//       <p className="mt-3">
//         <strong>Class Name:</strong> {classData?.name}
//       </p>
//       <p>
//         <strong>Teacher:</strong> {classData?.teacher}
//       </p>
//       <p>
//         <strong>Fee:</strong> {classData?.fee}
//       </p>
//     </div>
//   );
// };

// export default AdmissionDetails;
