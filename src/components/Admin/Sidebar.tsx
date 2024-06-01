import React from "react";
import { FaHome, FaUser, FaUsers, FaMoneyCheckAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className='h-screen w-1/5 bg-gray-800 text-white flex flex-col'>
			<div className='p-4 font-bold text-xl'>Admin Dashboard</div>
			<div className='flex-grow capitalize'>
				<ul>
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
