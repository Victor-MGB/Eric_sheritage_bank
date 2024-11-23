import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Stage_2 = () => {
  return (
    <div className="h-full w-full m-3 md:m-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">
          Card Authorization Required
        </h2>
        <p className="text-gray-700 mb-4">
          To complete the card authorization stage, please contact our service line. This step is
          necessary to verify your payment method and proceed with the activation of your account.
          For assistance, reach out to our support team at:
        </p>
        <div className="mb-4 flex items-center">
          <FaPhoneAlt className="text-blue-500 mr-2" />
          <span className="text-gray-700"> +16162506969</span>
        </div>
        <div className="mb-4 flex items-center">
          <FaEnvelope className="text-blue-500 mr-2" />
          <span className="text-gray-700">centrallNationalbank@gmail.com</span>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center justify-center">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default Stage_2;
