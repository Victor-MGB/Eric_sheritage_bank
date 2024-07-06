import React from "react";
import { FaHome, FaUser, FaUsers, FaMoneyCheckAlt, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC<{ opener: () => void; isOpen: boolean }> = ({ opener, isOpen }) => {
      const navigate = useNavigate();

      return (
            <div
                  className={`md:h-[100rem] w-0 bg-opacity-90  overflow-hidden transition-all duration-700 ${
                        isOpen ? "w-[17rem]" : "w-0 "
                  } fixed z-50 md:z-0  h-[100rem] md:relative md:w-[20%] h bg-gray-800 text-white flex flex-col`}
            >
                  <FaTimes
                        onClick={() => opener()}
                        className={`md:hidden  block  text-3xl mx-3 hover:text-gray-400 cursor-pointer`}
                  />

                  <div className='p-4 font-bold text-xl'>Admin Dashboard</div>
                  <div className='flex-grow capitalize'>
                        <ul className={`flex flex-col h-full items-center`} >
                              <li
                                    className='p-4 flex items-center hover:bg-gray-700 cursor-pointer'
                                    onClick={() => navigate("/admin")}
                              >
                                    <FaHome className='mr-4' /> Dashboard
                              </li>

                              <li
                                    className='p-4 flex items-center hover:bg-gray-700 cursor-pointer'
                                    onClick={() => navigate("/admin/notify-user")}
                              >
                                    <FaUser className='mr-4' /> notify User
                              </li>

                              <li
                                    className='p-4 flex items-center hover:bg-gray-700 cursor-pointer'
                                    onClick={() => navigate("/admin/users")}
                              >
                                    <FaUsers className='mr-4' /> manage Users
                              </li>

                              <li
                                    className='p-4 flex items-center hover:bg-gray-700 cursor-pointer'
                                    onClick={() => navigate("/admin/send-email")}
                              >
                                    <FaMoneyCheckAlt className='mr-4' /> send Client Email
                              </li>
                        </ul>
                  </div>
            </div>
      );
};

export default Sidebar;
