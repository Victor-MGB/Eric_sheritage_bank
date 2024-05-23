import { useState } from "react";
import { FaPlane, FaHome, FaMoneyBillAlt, FaCreditCard, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
	return (
		<div className={`z-10`} >
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
		<div
			style={{ backgroundImage: `url('/assets/images/officeDoc.jpg')` }}
			className='max-w-full  flex flex-col  gap-3 bg-cover bg-center p-3 h-[50rem]'
		>
			<div className='flex gap-3'>
				{services.map((service, index) => (
					<div
						key={index}
						className='w-[25rem] h-[16rem]  odd:bg-gray-300 even:bg-gray-400 rounded-lg shadow-md p-2 overflow-hidden'
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
								<Link
									to={service.link}
									className='text-blue-500 hover:underline mt-2 block'
								>
									Learn More
								</Link>
							</div>
						)}
					</div>
				))}
			</div>
			<ServiceCard />
		</div>
	);
};

const ServiceCard: React.FC = () => {
	return (
		<div className='w-full bg-white rounded-lg shadow-md overflow-hidden bg-opacity-30'>
			<div className='bg-blue-600 p-6'>
				<h2 className='text-2xl font-bold text-white'>Our Bank Services</h2>
			</div>
			<div className='p-6'>
				<p className='mb-4 text-gray-700'>
					At our bank, we offer a wide range of services to meet your financial needs. Here are some
					suggestions:
				</p>
				<ul className='list-disc pl-5 mb-4 text-gray-700 space-y-2'>
					<li>
						Open a checking or savings account to manage your daily transactions and save for
						the future.
					</li>
					<li>Apply for a credit card to build credit and earn rewards on your purchases.</li>
					<li>
						Explore our loan options, including personal loans, auto loans, and mortgages, to
						finance your goals.
					</li>
					<li>
						Invest in our retirement accounts or brokerage services to grow your wealth over
						time.
					</li>
					<li>Utilize our online banking and mobile app for convenient access to your accounts.</li>
				</ul>
				<p className='mb-6 text-gray-700'>
					Visit your nearest branch or contact our customer service team to learn more about our
					banking services and how we can assist you.
				</p>
				<a
					href='#get-started'
					className='bg-blue-600 text-white py-3 px-6 rounded-lg block text-center font-semibold hover:bg-blue-700 transition duration-300'
				>
					Get Started
				</a>
			</div>
		</div>
	);
};
