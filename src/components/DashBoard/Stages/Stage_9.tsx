import React from "react";
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle } from "react-icons/fa";

const Stage_9: React.FC = () => {
  return (
    <div className="h-full w-full m-3 md:m-0 flex items-center justify-center bg-black bg-opacity-40">
      <div
        className="bg-white p-6 w-full max-w-md
         rounded-lg shadow-md">
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
          <h2 className="text-2xl font-bold ml-4 text-gray-800">Contact Customer Care</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Please select an issue you'd like to report or get assistance with:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li className="mb-2 cursor-pointer hover:text-blue-500">
            <FaQuestionCircle className="inline mr-2 text-yellow-500" />
            Report a lost or stolen card
          </li>
          <li className="mb-2 cursor-pointer hover:text-blue-500">
            <FaQuestionCircle className="inline mr-2 text-yellow-500" />
            Dispute a recent transaction
          </li>
          <li className="mb-2 cursor-pointer hover:text-blue-500">
            <FaQuestionCircle className="inline mr-2 text-yellow-500" />
            General inquiries or support
          </li>
        </ul>
        <p className="text-gray-600 mb-4">
          Alternatively, reach out to us directly using the options below:
        </p>
        <div className="mb-4 flex items-center">
          <FaPhoneAlt className="text-blue-500 mr-2" />
          <span className="text-gray-700">+16162506969</span>
        </div>
        <div className="mb-4 flex items-center">
          <FaEnvelope className="text-blue-500 mr-2" />
          <span className="text-gray-700">centrallNationalbank@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Stage_9;
