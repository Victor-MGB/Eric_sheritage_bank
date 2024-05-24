import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const [isConverterDropDownShowing, setisConverterDropDownShowing] = useState<boolean>(false);
	const [isPageDropdownShowing, setisPageDropdownShowing] = useState(false);

	const handleDropdownClicks = (arg: boolean) => {
		setisConverterDropDownShowing(arg);
	};
	const handleIsPageDropdownShowing = (arg: boolean) => {
		setisPageDropdownShowing(arg);
	};
	return (
		<>
			<header
				className={`w-[100vw] h-[4rem] fixed z-30  bg-transparent flex items-center justify-between p-3 bg-slate-200 `}
			>
				{/* logo space */}
				<div>logo space </div>

				<Navlinks
					handler2={(arg) => handleIsPageDropdownShowing(arg)}
					handler={(arg) => handleDropdownClicks(arg)}
				/>

				{/* translator space */}
				<div className=''>translator space </div>
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
	const [isActive, setisActive] = useState<boolean[]>([false, false, false, false, false]);

	// handleNavClick function to update the isActive state based on the clicked nav item index
	const handleNavClick = (index: number) => {
		const newIsActive = isActive.map((item, i) => i === index);
		setisActive(newIsActive);
	};

	const navigate = useNavigate();
	return (
		<ul className='flex items-center justify-between gap-[2rem]'>
			{["home", "about", "contact", "converter", "pages"].map((eachLink, index) => {
				return (
					<li
						className={`text-sm text-neutral-600 hover:text-highlitedText hover:p-2   transition-all duration-500 uppercase bold p-2 cursor-pointer m-1 ${
							isActive[index]
								? " border rounded-md transition-all shadow-md shadow-black text-primary "
								: ""
						} `}
						key={index}
						onClick={() => {
							console.log(isActive);
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
									className={` text-[20px] ${
										isActive[index]
											? "text-primary transition-all  rotate-180 duration-700"
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

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

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
				className={`flex  flex-row-reverse p-2 gap-2 hover:bg-gray-200 bg-gray-100 group items-center justify-center ${
					activeTab === "FAQ" ? "bg-gray-400 text-slate-300" : ""
				}`}
				onClick={() => handleTabClick("FAQ")}
			>
				<p>FAQ</p>
				<div
					className={`h-0  w-[5px] group-hover:transition-all group-hover:duration-700 group-hover:h-[3rem] ${
						activeTab === "FAQ" ? "animate-bounce bg-primary h-[2.5rem] w-[2px] " : ""
					}  group-hover:bg-cyan-500 group-hover:block`}
				></div>
			</div>

			<div
				className={`flex flex-row-reverse p-2 gap-2 hover:bg-gray-200 bg-gray-100 group items-center justify-center ${
					activeTab === "Access" ? "bg-gray-400 text-slate-300" : ""
				}`}
				onClick={() => handleTabClick("Access")}
			>
				<p>Access</p>
				<div
					className={`h-0  w-[5px] group-hover:transition-all group-hover:duration-700 group-hover:h-[3rem] ${
						activeTab === "Access" ? "animate-bounce bg-primary h-[2.5rem] w-[2px] " : ""
					}  group-hover:bg-cyan-500 group-hover:block`}
				></div>
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
