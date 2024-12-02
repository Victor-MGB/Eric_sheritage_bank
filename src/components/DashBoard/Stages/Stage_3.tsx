import React from "react";
import { FaCreditCard, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Stage_3 = () => {
  return (
    <div className="h-full w-full m-3 md:m-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Preparation and Certification
        </h2>
        <p className="text-gray-700 mb-4">
          To complete the preparation and certification stage, please ensure your payment is made.
          This step is crucial to finalize your account setup and certify your information. For
          further assistance, contact our support team at:
        </p>
        <div className="mb-4 flex items-center">
          <FaPhoneAlt className="text-blue-500 mr-2" />
          <span className="text-gray-700"> +16623605122</span>
        </div>
        <div className="mb-4 flex items-center">
          <FaEnvelope className="text-blue-500 mr-2" />
          <span className="text-gray-700">centrallNationalbank@gmail.com</span>
        </div>
        <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 flex items-center justify-center">
          <FaCreditCard className="mr-2" /> Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Stage_3;
