import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaMoneyBillAlt, FaExchangeAlt, FaHistory, FaWallet } from "react-icons/fa";
import { motion } from "framer-motion";

const SideBar = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const links = [
		{
			name: "My Cards",
			icon: <FaWallet />,
			submenus: ["View Cards", "Add New Card", "Manage Cards"],
		},
		{
			name: "Transfer",
			icon: <FaMoneyBillAlt />,
			submenus: ["To My Accounts", "To Other Banks", "International Transfer"],
		},
		{
			name: "Transactions",
			icon: <FaHistory />,
			submenus: ["View Transactions", "Filter Transactions", "Export Transactions"],
		},
		{
			name: "Exchange",
			icon: <FaExchangeAlt />,
			submenus: ["Currency Exchange", "Crypto Exchange", "Rates"],
		},
	];

	const toggleSubmenu = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<aside className='w-64 h-screen fixed bg-gray-100 flex flex-col items-center p-4 shadow-lg'>
			{/* Avatar */}
			<div className='w-full rounded-lg m-3 bg-blue-600 flex items-center p-4 gap-4 shadow-md'>
				<div className='rounded-full w-12 h-12 bg-gray-400'></div>
				<div className='flex flex-col items-start justify-center w-full text-white'>
					<p className='font-semibold'>UserName</p>
					<p className='text-sm'>Account Number</p>
				</div>
			</div>

			{/* Links */}
			<ul className='w-full mt-6 flex flex-col gap-[1rem]  p-2 h-[23rem] justify-between'>
				{links.map((item, index) => (
					<div key={index} className='flex-col w-full'>
						<li
							className='p-3 bg-gray-100  rounded-md flex items-center justify-between text-lg font-medium hover:bg-gray-200 cursor-pointer'
							onClick={() => toggleSubmenu(index)}
						>
							<div className='flex items-center gap-2'>
								{item.icon}
								{item.name}
							</div>
							{activeIndex === index ? <FaAngleLeft /> : <FaAngleRight />}
						</li>
						{/* Submenu */}
						{activeIndex === index && (
							<motion.ul
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								transition={{ duration: 0.3 }}
								className='flex flex-col pl-8 py-2 space-y-2 bg-gray-50 rounded-md'
							>
								{item.submenus.map((submenu, subIndex) => (
									<li
										key={subIndex}
										className='text-sm text-gray-600 hover:text-gray-900 cursor-pointer'
									>
										{submenu}
									</li>
								))}
							</motion.ul>
						)}
					</div>
				))}
			</ul>
		</aside>
	);
};

export default SideBar;
