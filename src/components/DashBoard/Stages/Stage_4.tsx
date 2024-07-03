import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Stage_4 = () => {
      const [agreement, setAgreement] = useState<string>("");

      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setAgreement(event.target.value);
      };

      const handleSubmit = () => {
            // Handle form submission, e.g., save the agreement, validate input, etc.
            console.log("Agreement:", agreement);
      };

      return (
            <div className='h-full w-full m-3 md:m-0 flex items-center justify-center bg-black bg-opacity-40'>
                  <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
                        <h2 className='text-2xl font-bold mb-6 text-center text-blue-600'>Transaction Monitoring</h2>
                        <p className='text-gray-700 mb-4'>
                              To complete the transaction monitoring stage, please agree to the authorization of charges
                              for continuous monitoring of your account. For assistance, contact our support team on
                              activation process at:
                        </p>
                        <div className='mb-4 flex items-center'>
                              <FaPhoneAlt className='text-blue-500 mr-2' />
                              <span className='text-gray-700'>+12074021612</span>
                        </div>
                        <div className='mb-4 flex items-center'>
                              <FaEnvelope className='text-blue-500 mr-2' />
                              <span className='text-gray-700'>centralcity0@gmail.com</span>
                        </div>
                        <div className='mb-4'>
                              <label className='block text-gray-700 mb-2' htmlFor='agreement'>
                                    Agreement
                              </label>
                              <input
                                    type='text'
                                    id='agreement'
                                    value={agreement}
                                    onChange={handleInputChange}
                                    className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none'
                                    placeholder='I authorize charges for continuous monitoring'
                              />
                        </div>
                        <button
                              onClick={handleSubmit}
                              className='w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 flex items-center justify-center'
                        >
                              Submit Agreement
                        </button>
                  </div>
            </div>
      );
};

export default Stage_4;
