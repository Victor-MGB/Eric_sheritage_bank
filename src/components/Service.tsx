import { useState } from "react";
import { FaPlane, FaHome, FaMoneyBillAlt, FaCreditCard, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
	return (
		<div>
			<h1
				className={`text-5xl text-center  dancing-script border p-3 border-double w-[39rem] rounded-lg animate-pulse m-auto my-4 border-slate-400 `}
			>
				choose what is right for you . . .!!
			</h1>

			<ServiceAccordion />
		</div>
	);
};
export default Services;

const ServiceAccordion: React.FC = () => {
	const services = [
		{
			name: "Travel",
			icon: <FaPlane />,
			writeUp: "Explore the world with our travel services.",
			link: "/travel",
		},
		{
			name: "Home Loans",
			icon: <FaHome />,
			writeUp: "Affordable home loans for your dream home.",
			link: "/home-loans",
		},
		{
			name: "Savings",
			icon: <FaMoneyBillAlt />,
			writeUp: "Save more with our high-interest savings accounts.",
			link: "/savings",
		},
		{
			name: "Credit Cards",
			icon: <FaCreditCard />,
			writeUp: "Flexible credit cards for all your needs.",
			link: "/credit-cards",
		},
		{
			name: "Business",
			icon: <FaBriefcase />,
			writeUp: "Boost your business with our financial solutions.",
			link: "/business",
		},
	];

	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	return (
		<div className='max-w-7xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
			{services.map((service, index) => (
				<div
					key={index}
					className='w-80   odd:bg-gray-300 even:bg-gray-400 rounded-lg shadow-md p-2 overflow-hidden'
				>
					<button
						onClick={() => handleToggle(index)}
						className='flex items-center justify-between w-full p-4 focus:outline-none'
					>
						<div className='flex items-center space-x-2'>
							{service.icon}
							<span className='font-medium'>{service.name}</span>
						</div>
						<div className='flex items-center space-x-2'>
							<span
								className={`transform transition-transform duration-200 ${
									expandedIndex === index ? "rotate-180" : ""
								}`}
							>
								▼
							</span>
							{expandedIndex === index && (
								<span className='h-3 w-3 bg-blue-500 rounded-full'></span>
							)}
						</div>
					</button>
					{expandedIndex === index && (
						<div className='p-4 bg-gray-100'>
							<p>{service.writeUp}</p>
							<Link to={service.link} className='text-blue-500 hover:underline mt-2 block'>
								Learn More
							</Link>
						</div>
					)}
				</div>
			))}
		</div>
	);
};
