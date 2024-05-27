import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";

function SideBar() {
	const SideLink = ["account", "transaction", "setting", "transfer", "exchange", "cards", "kyc"];

	const [isActive, setisActive] = useState<boolean[]>(Array(SideLink.length).fill(false));

	//handle activeTab
	const handleActiveTab = (index: number) => {
		setisActive((prevState)=>[...prevState,prevState[index]=true]);
	};

	return (
		<aside
			className={`w-[14rem] h-screen max-w-[40rem] bg-slate-100 shadow-sm shadow-gray-400 flex flex-col items-center justify-between p-3 `}
		>
			<ul className={`flex  flex-col items-center justify-center gap-[1rem]`}>
				<h1 className={`text-xl bold orbitron text-highlitedText uppercase`}>dashboard</h1>
				{SideLink.map((eachSidelink: string, index: number) => {
					return (
						<li
							className={`w-full  max-w-full text-blue-400 uppercase text-sm bg-transparent hover:shadow-gray-400 shadow-sm flex items-center justify-center gap-2 p-2 m-2 rounded-xl cursor-pointer ${
								isActive[index]
									? "border border-blue-100 animate-pulse shadow-sm bg-slate-500 transition-all duration-700"
									: "border-0"
							} `}
							onClick={() => handleActiveTab(index)}
							key={index}
							id={`link ${index}`}
						>
							{eachSidelink}
						</li>
					);
				})}

				<div className={` capitalize flex items-center justify-center gap-2 text-blue-200`}>
					log <FaSignOutAlt />{" "}
				</div>
			</ul>
		</aside>
	);
}

export default SideBar;
