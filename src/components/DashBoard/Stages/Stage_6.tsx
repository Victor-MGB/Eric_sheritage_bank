import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Stage_6: React.FC = () => {
  return (
    <div className="h-full w-full m-3 md:m-0 flex items-center justify-center bg-black bg-opacity-40">
      {" "}
      <div
        className="bg-white p-6 w-full max-w-md
         rounded-lg  shadow-md">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <svg
              className="h-8 w-8 text-indigo-500"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold ml-4 text-gray-800">Profile Setup</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Complete your profile setup by providing essential information:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li className="mb-2">Personal details</li>
          <li className="mb-2">Contact information</li>
          <li>Security settings</li>
        </ul>
        <div className="mb-4 flex items-center">
          {/* <FaPhoneAlt className="text-blue-500 mr-2" /> */}
          {/* <span className="text-gray-700"> +16623605122</span> */}
        </div>
        <div className="mb-4 flex items-center">
          <FaEnvelope className="text-blue-500 mr-2" />
          <span className="text-gray-700">Sheritage144@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Stage_6;
