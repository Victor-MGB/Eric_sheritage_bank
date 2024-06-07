import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaCog, FaHandHoldingUsd, FaLifeRing, FaQuestionCircle } from "react-icons/fa";
import { FaMoneyBillAlt, FaExchangeAlt, FaWallet } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type sideBarProp = {
	UserName: string;
	accountNumber: number;
};
const SideBar = ({ UserName, accountNumber }: sideBarProp) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const navi = useNavigate();
	const links = [
		{
			name: "My Cards",
			icon: <FaWallet />,
			submenus: ["View Cards", "Manage Cards"],
		},
		{
			name: "account",
			icon: <FaWallet />,
			submenus: ["profile", "security", "kyc", "language"],
		},
		{
			name: "Transfer",
			icon: <FaMoneyBillAlt />,
			submenus: ["To My Accounts", "To Other Banks", "International Transfer"],
		},

		{
			name: "Exchange",
			icon: <FaExchangeAlt />,
			submenus: ["Currency Exchange", "Rates"],
		},
		{
			name: "Loan",
			icon: <FaHandHoldingUsd />,
			submenus: ["Loan Status", "Loan Repayment"],
		},
	];

	const toggleSubmenu = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const handle_myCards_route_Rendering = (routeName: string) => {
		switch (routeName) {
			case "View Cards":
				return navi("/dashboard/cards");

			case "Add New Card":
				return navi("/dashboard/add-newCard");

			case "Manage Cards":
				return navi("/dashboard/manage-cards");
			default:
				break;
		}
	};

	const handle_transfer_route_Rendering = (routeName: string) => {
		switch (routeName) {
			case "To My Accounts":
				return navi("/dashboard/my-accounts");

			case "To Other Banks":
				return navi("/dashboard/other-banks");

			case "International Transfer":
				return navi("/dashboard/international");
			default:
				break;
		}
	};

	const handle_profile_route_Rendering = (routeName: string) => {
		switch (routeName) {
			case "profile":
				return navi("/dashboard/profile");

			case "kyc":
				return navi("/dashboard/kyc");

			case "security":
				return navi("/dashboard/security");

			case "email-verification":
				return navi("/dashboard/email-verification");
			case "language":
				return navi("/dashboard/email-verification");
			default:
				break;
		}
	};
	const handle_Exchange_route_Rendering = (routeName: string) => {
		switch (routeName) {
			case "Currency Exchange":
				return navi("/dashboard/currencyExchange");

			case "Rates":
				return navi("/dashboard/rates");
			default:
				break;
		}
	};

	return (
		<aside className='w-[14rem] h-screen fixed bg-white flex flex-col items-center p-4 shadow-lg'>
			{/* Avatar */}
			<div className='w-full rounded-lg m-3 bg-blue-600 flex items-center p-4 gap-4 shadow-md'>
				<div className='rounded-full w-12 h-12 bg-gray-400'></div>
				<div className='flex flex-col items-start justify-center w-full text-white'>
					<p className='font-semibold'>{UserName !== "" ? UserName : "userName"}</p>
					<p className='text-sm'>{accountNumber ? accountNumber:0}</p>
				</div>
			</div>

			{/* Links */}
			<ul className='w-full mt-6 flex flex-col gap-[1rem]  p-2 h-auto overflow-scroll overflow-x-hidden overflow-y-scroll justify-between'>
				{links.map((item, index) => (
					<div key={index} className='flex-col w-full'>
						<li
							className='p-3 flex flex-col bg-gray-100  rounded-md  items-start justify-between text-lg font-medium hover:bg-gray-200 cursor-pointer'
							onClick={() => toggleSubmenu(index)}
						>
							<div className={`flex gap-2 p-2`}>
								<div className='flex text-sm items-center gap-2 capitalize'>
									{item.icon}
									{item.name}
								</div>
								{activeIndex === index ? <FaAngleLeft /> : <FaAngleRight />}
							</div>

							{/* Submenu */}
							{activeIndex === index && (
								<motion.ul
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: "auto", opacity: 1 }}
									transition={{ duration: 0.3 }}
									className='flex w-full text-xs p-2
									items-start flex-col py-2 space-y-2 rounded-md'
								>
									{item.submenus.map((submenu, subIndex) => (
										<li
											onClick={() => {
												handle_myCards_route_Rendering(submenu);
												handle_transfer_route_Rendering(submenu);
												handle_profile_route_Rendering(submenu);
												handle_Exchange_route_Rendering(submenu);
											}}
											key={subIndex}
											className='text-sm capitalize w-fit  text-nowrap text-gray-600  rounded-md hover:text-gray-900 cursor-pointer group hover:bg-opacity-40 transition-all duration-500 ease-in-out hover:shadow-md shadow-gray-400 flex items-center justify-start gap-2'
										>
											<span
												className={`w-0  opacity-0 bg-blue-300 group-hover:w-[15px] p-[2px] group-hover: group-hover: group-hover:transition-all group-hover:opacity-90 group-hover:duration-500 transition-all `}
											></span>
											{submenu}
										</li>
									))}
								</motion.ul>
							)}
						</li>
					</div>
				))}
			</ul>

			{/* other */}
			<div className='w-full flex flex-col items-start gap-[1rem] p-2 justify-between'>
				<h1 className={`text-xl font-extrabold`}>Others</h1>

				<div className={`capitalize w-full  flex flex-col `}>
					<div
						onClick={() => navi("/dashboard/support")}
						className={`capitalize flex items-center gap-2 cursor-pointer hover:text-slate-400 w-full`}
					>
						<FaLifeRing /> support
					</div>
					<div className={`capitalize flex items-center gap-2`}>
						<FaCog /> settings
					</div>
					<div className={`capitalize flex items-center gap-2`}>
						<FaQuestionCircle /> help
					</div>
				</div>
			</div>
		</aside>
	);
};

export default SideBar;
