import React from "react";
import { FaLock, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Stage_11: React.FC = () => {
  return (
    <div className="h-full w-full m-3 md:m-0 flex items-center justify-center bg-black bg-opacity-40">
      <div
        className="bg-white p-6 w-full max-w-md
         rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <FaLock className="h-8 w-8 text-indigo-500" />
          </div>
          <h2 className="text-2xl font-bold ml-4 text-gray-800">
            Enable Two-Factor Authentication
          </h2>
        </div>
        <p className="text-gray-600 mb-4">
          Add an extra layer of security to your account by enabling Two-Factor Authentication
          (2FA).
        </p>
        <div className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter your registered phone number"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
            Send Verification Code
          </button>
          <input
            type="text"
            placeholder="Enter the verification code"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Verify & Enable 2FA
          </button>
        </div>
        <p className="text-gray-600 mb-4">Need help setting up 2FA? Contact us:</p>
        <div className="mb-4 flex items-center">
          <FaPhoneAlt className="text-blue-500 mr-2" />
          {/* <span className="text-gray-700">+16623605122</span> */}
        </div>
        <div className="mb-4 flex items-center">
          <FaEnvelope className="text-blue-500 mr-2" />
          <span className="text-gray-700">Sheritage144@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Stage_11;
