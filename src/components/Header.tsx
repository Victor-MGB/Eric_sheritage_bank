import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BsBank } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
	const [isConverterDropDownShowing, setisConverterDropDownShowing] = useState<boolean>(false);
	const [isPageDropdownShowing, setisPageDropdownShowing] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const navi = useNavigate();

	const handleDropdownClicks = (arg: boolean) => {
		setisConverterDropDownShowing(arg);
	};

	const handleIsPageDropdownShowing = (arg: boolean) => {
		setisPageDropdownShowing(arg);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<header
				className={`w-full h-[4rem] fixed z-30 bg-gray-50 flex items-center justify-between  md:p-3 max-w-full `}
			>
				{/* Mobile Menu Icon */}
				<div className='lg:hidden flex items-center '>
					<button onClick={toggleMobileMenu} className='text-3xl text-red-600'>
						{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>

				{/* logo space */}
				<h1
					className={`lg:font-bold flex items-center justify-start text-3xl lg:text-5xl font-bold drop-shadow-lg uppercase bg-red-600 p-1 w-[8rem] lg:w-[11rem]`}
				>
					CN{" "}
					<span
						className={`text-white lg:ml-[-0.5rem] mr-[1rem] text-3xl lg:text-5xl font-bold drop-shadow-lg uppercase`}
					>
						B
					</span>
					<BsBank className="font-bold" />
					<div
						className={`bg-red-600 transform p-5 absolute w-[2%] h-[100%] top-0 left-[6.6rem] lg:left-[11rem]`}
						style={{ clipPath: "polygon(100% 0%, 0% 50%, 100% 100%, 0 100%, 0 50%, 0 0)" }}
					></div>
				</h1>

				{/* Navigation Links */}
				<div
					className={`lg:flex  left-[14rem] overflow-hidden w-0  fixed  bg-opacity-950 md:hidden  ${
						isMobileMenuOpen
							? " w-[15rem] top-[3.5rem] h-screen opacity-85 transition-all duration-700 bg-black p-2"
							: "w-0 opacity-60 transition-all duration-1000 ease-in"
					} flex-col lg:flex-row items-center justify-between lg:w-auto`}
				>
					<Navlinks
						handler2={(arg) => handleIsPageDropdownShowing(arg)}
						handler={(arg) => handleDropdownClicks(arg)}
					/>
				</div>

				{/* auth space */}
				<div className='flex justify-between bg-transparent gap-3 h-auto items-center p-1 md:p-3 lg:w-[20rem] lg:mr-[4rem]'>
					<button
						onClick={() => navi("/sign-in")}
						className={`md:p-2 text-nowrap p-1 text-sm rounded-none w-fit md:w-[7rem] bg-transparent border border-black text-red-600 hover:text-white hover:bg-red-600 uppercase cursor-pointer`}
					>
						log-in
					</button>
					<button
						onClick={() => navi("/sign-up")}
						className={`md:p-2 p-1 text-nowrap rounded-none w-fit text-sm hover:bg-black text-white hover:text-white bg-red-600 uppercase cursor-pointer`}
					>
						open account
					</button>
				</div>
			</header>
			<ConverterDropDown isVisible={isConverterDropDownShowing} shutdwnVisible={handleDropdownClicks} />
			<PageDropDown isVisible={isPageDropdownShowing} shutdwnVisible={handleIsPageDropdownShowing} />
		</>
	);
};

export default Header;

// nav links components

/**
 * Renders a navigation links component with active state management.
 *
 * The `Navlinks` component renders a list of navigation links with the ability to track which link is currently active. The active state is managed using the `useState` hook, which stores an array of boolean values indicating the active state of each link.
 *
 * The `handleNavClick` function is used to update the active state when a link is clicked. It takes the index of the clicked link as a parameter and updates the `isActive` state accordingly.
 *
 * The component maps over an array of link names and renders a list item for each one. The list item has a class that changes based on the active state, and an `onClick` handler that calls `handleNavClick` with the corresponding index.
 */
const Navlinks = (prop: { handler: (arg: boolean) => void; handler2: (arg: boolean) => void }) => {
	const [isActive, setisActive] = useState<boolean[]>([false, false, false, false, false, false]);

	const handleNavClick = (index: number) => {
		const newIsActive = isActive.map((item, i) => i === index);
		setisActive(newIsActive);
	};

	const navigate = useNavigate();

	return (
		<ul className='flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-[2rem]'>
			{["home", "about", "contact", "converter", "pages"].map((eachLink, index) => {
				return (
					<li
						className={`text-lg orbitron text-red-600 hover:border border-black hover:p-2 transition-all duration-500 uppercase bold p-2 cursor-pointer m-1 ${
							isActive[index]
								? "border rounded-md transition-all shadow-md shadow-black text-primary"
								: ""
						}`}
						key={index}
						onClick={() => {
							handleNavClick(index);
							if (eachLink === "converter") prop.handler(true);
							if (eachLink === "pages") prop.handler2(true);
							if (eachLink === "about") navigate("/about");
							if (eachLink === "contact") navigate("/contact");
							if (eachLink === "home") navigate("/");
						}}
					>
						{eachLink === "converter" || eachLink === "pages" ? (
							<span className={"flex items-center gap-[0.5rem]"}>
								{eachLink}
								<IoMdArrowDropup
									className={`text-[20px] ${
										isActive[index]
											? "text-primary transition-all rotate-180 duration-700"
											: "text-blue-400 transition rotate-0 duration-700"
									}`}
								/>
							</span>
						) : (
							eachLink
						)}
					</li>
				);
			})}
		</ul>
	);
};

/**
 * A dropdown component that displays a list of currency conversion, currency charts, and exchange rate options.
 *
 * @param isVisible - A boolean indicating whether the dropdown should be visible or not.
 * @param shutdwnVisible - A function that takes a boolean argument to control the visibility of the dropdown.
 */

const ConverterDropDown = ({
	isVisible,
	shutdwnVisible,
}: {
	isVisible: boolean;
	shutdwnVisible: (arg: boolean) => void;
}) => {
	const [activeTab, setActiveTab] = useState<string | null>(null);

	const navi = useNavigate();
	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<div
			onMouseLeave={() => shutdwnVisible(false)}
			className={`w-[9rem] z-50  h-0 ${
				isVisible
					? " duration-1000 gap-[1rem] transition-all p-3 h-[13rem]"
					: "h-0 transition-all duration-1000 ease-out"
			} text-nowrap text-sm flex flex-col  overflow-hidden bg-slate-300 bg-opacity-60 z-30 fixed top-[4rem] left-[43rem] `}
		>
			<div
				className={`flex flex-row-reverse p-2 gap-2 hover:bg-gray-400 group items-center justify-center ${
					activeTab === "convertCurrency" ? "bg-gray-400 text-slate-300" : "bg-gray-200"
				}`}
				onClick={() => handleTabClick("convertCurrency")}
			>
				<p>convert currency</p>
				<div
					className={`h-0  w-[5px] group-hover:transition-all group-hover:duration-700 group-hover:h-[3rem] ${
						activeTab === "convertCurrency"
							? "animate-bounce bg-primary h-[2.5rem] w-[2px] "
							: ""
					}  group-hover:bg-cyan-500 group-hover:block`}
				></div>
			</div>

			{/* currency charts */}
			<div
				className={`flex flex-row-reverse p-2 gap-2 hover:bg-gray-400 group items-center justify-center ${
					activeTab === "currencyCharts" ? "bg-gray-400" : "bg-gray-200"
				}`}
				onClick={() => {
					handleTabClick("currencyCharts");
				}}
			>
				<p>currency charts</p>
				<div
					className={`h-0  w-[5px] group-hover:transition-all group-hover:duration-700 group-hover:h-[3rem] ${
						activeTab === "currencyCharts"
							? "animate-bounce bg-primary h-[2.5rem] w-[2px] "
							: ""
					}  group-hover:bg-cyan-500 group-hover:block`}
				></div>
			</div>

			{/* exchange rate */}
			<div
				className={`flex flex-row-reverse p-2 gap-2 hover:bg-gray-400 group items-center justify-center ${
					activeTab === "exchangeRate" ? "bg-gray-400" : "bg-gray-200"
				}`}
				onClick={() => {
					handleTabClick("exchangeRate");
					navi("/rates");
				}}
			>
				<p>exchange rate</p>
				<div
					className={`h-0  w-[5px] group-hover:transition-all group-hover:duration-700 group-hover:h-[3rem] ${
						activeTab === "exchangeRate" ? "animate-bounce bg-primary h-[2.5rem] w-[2px] " : ""
					}  group-hover:bg-cyan-500 group-hover:block`}
				></div>
			</div>
		</div>
	);
};

/**
 * Renders a dropdown menu with various options, such as FAQ, Access, Account, and Terms of Service/Privacy Policy.
 * The dropdown is positioned absolutely and is shown or hidden based on the `isVisible` prop.
 * The `shutdwnVisible` function is called when the user moves the mouse away from the dropdown to hide it.
 * Each option in the dropdown has a hover effect and an active state that changes the background color and text color.
 * The active tab is tracked using the `activeTab` state variable, which is updated when the user clicks on an option.
 */
const PageDropDown = ({
	isVisible,
	shutdwnVisible,
}: {
	isVisible: boolean;
	shutdwnVisible: (arg: boolean) => void;
}) => {
	const [activeTab, setActiveTab] = useState<string | null>(null);
	const [isSubActiveTab, setisSubActiveTab] = useState<string | null>(null);
	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	const handleSubActive = (tab: string) => {
		setisSubActiveTab(tab);
	};

	const navi = useNavigate();
	return (
		<div
			onMouseLeave={() => shutdwnVisible(false)}
			className={`w-[9rem] h-0 ${
				isVisible
					? " duration-1000 gap-[1rem] transition-all p-3 h-[13rem]"
					: "h-0 transition-all duration-1000 ease-out"
			} text-nowrap text-sm flex flex-col bg-slate-300 rounded-sm overflow-hidden bg-opacity-60 z-50 top-[4rem] fixed left-[53rem] `}
		>
			<div
				className={`flex cursor flex-row-reverse p-2 gap-2 hover:bg-gray-200 bg-gray-100 group items-center justify-center ${
					activeTab === "FAQ" ? "bg-gray-400 text-slate-300" : ""
				}`}
				onClick={() => {
					handleTabClick("FAQ");
					navi("FAQs");
				}}
			>
				<p>FAQ</p>
				<div
					className={`h-0  w-[5px] group-hover:transition-all group-hover:duration-700 group-hover:h-[3rem] ${
						activeTab === "FAQ" ? "animate-bounce bg-primary h-[2.5rem] w-[2px] " : ""
					}  group-hover:bg-cyan-500 group-hover:block`}
				></div>
			</div>

			<div
				className={`flex capitalize flex-col p-2 gap-2 hover:bg-gray-200 bg-gray-100 group items-center justify-center ${
					activeTab === "Access" ? "bg-gray-400 text-slate-300" : ""
				}`}
				onClick={() => handleTabClick("Access")}
			>
				{/* 1 */}
				<div className={`flex flex-row-reverse gap-2`}>
					<p>help</p>
					<div
						className={`h-0  w-[5px] group-hover:transition-all group-hover:duration-700 group-hover:h-[3rem] ${
							activeTab === "Access" ? "animate-bounce bg-primary h-[2.5rem] w-[2px] " : ""
						}  group-hover:bg-cyan-500 group-hover:block`}
					></div>
				</div>

				{/* 2 */}
				<ul
					className={`h-0 p-0 ${
						isSubActiveTab === "help"
							? " transition-all duration-500 h-[5rem] p-2 bg-blue-300 flex flex-col items-center justify-center gap-[1rem] cursor-pointer"
							: "h-0 p-0"
					}`}
					onMouseOver={() => {
						handleSubActive("help");
					}}
				>
					<li></li>
				</ul>
			</div>

			<div
				className={`flex flex-row-reverse p-2 gap-2 hover:bg-gray-200 bg-gray-100 group items-center justify-center ${
					activeTab === "Account" ? "bg-gray-400 text-slate-300" : ""
				}`}
				onClick={() => handleTabClick("Account")}
			>
				<p>Account</p>
				<div
					className={`h-0  w-[5px] group-hover:transition-all group-hover:duration-700 group-hover:h-[3rem] ${
						activeTab === "Account" ? "animate-bounce bg-primary h-[2.5rem] w-[2px] " : ""
					}  group-hover:bg-cyan-500 group-hover:block`}
				></div>
			</div>

			<div
				className={`flex flex-row-reverse p-2 gap-2 hover:bg-gray-200 bg-gray-100 group items-center justify-center ${
					activeTab === "Terms of Service Privacy Policy" ? "bg-gray-400 text-slate-300" : ""
				}`}
				onClick={() => handleTabClick("Terms of Service Privacy Policy")}
			>
				<p>Terms of Service </p>
				<div
					className={`h-0  w-[5px] group-hover:transition-all group-hover:duration-700 group-hover:h-[3rem] ${
						activeTab === "Terms of Service Privacy Policy"
							? "animate-bounce bg-primary h-[2.5rem] w-[2px] "
							: ""
					}  group-hover:bg-cyan-500 group-hover:block`}
				></div>
			</div>
		</div>
	);
};
