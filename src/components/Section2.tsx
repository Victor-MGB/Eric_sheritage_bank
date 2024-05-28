import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import {
	FaShieldAlt,
	FaClock,
	FaMoneyCheckAlt,
	FaHeadset,
	FaPlay,
	FaUserAlt,
	FaApple,
	FaGooglePlay,
	FaHeart,
	FaComment,
	FaCalendarAlt,
	FaUser,
	FaComments,
} from "react-icons/fa";
import { FaDollarSign, FaCheckCircle } from "react-icons/fa";
import {
	FaMobileAlt,
	FaUniversity,
	FaPiggyBank,
	FaCreditCard,
	FaUserShield,
	FaHome,
	FaBuilding,
	FaWallet,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Section2 = () => {
	const features = [
		{
			icon: <FaShieldAlt size={50} />,
			title: "Secure International Transaction",
			description: "Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.",
		},
		{
			icon: <FaClock size={50} />,
			title: "Less Time in any Loans Approval",
			description: "Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.",
		},
		{
			icon: <FaMoneyCheckAlt size={50} />,
			title: "Lowest Processing Fee than Other Banks",
			description: "Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.",
		},
		{
			icon: <FaHeadset size={50} />,
			title: "24/7 Support from the Expert Team",
			description: "Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.",
		},
	];

	return (
		<div className='w-full p-2 bg-gray-20 flex flex-col items-center justify-center gap-4'>
			<section className='flex items-center  justify-center gap-4 bg-slate-200'>
				{features.map((feature, index) => (
					<div
						key={index}
						className=' w-[15rem] relative flex flex-col items-center p-6 bg-gray-200 rounded-lg overflow-hidden group hover:shadow-md shadow-red-500 '
					>
						<div className='absolute inset-0 bg-red-600 h-0 group-hover:h-full transition-all duration-500 ease-in-out'></div>
						<div className='relative z-10 mb-4 text-red-500 group-hover:text-white transition-colors duration-300 ease-in-out'>
							{feature.icon}
						</div>
						<h3 className='relative z-10 mb-2 text-lg font-semibold text-center group-hover:text-white transition-colors duration-300 ease-in-out'>
							{feature.title}
						</h3>
						<p className='relative z-10 text-center text-gray-700 group-hover:text-white transition-colors duration-300 ease-in-out'>
							{feature.description}
						</p>
					</div>
				))}
			</section>

			<FinancialGuidance />
			<Services />
			<EMICalculator />
			<HeroSection />
			<StatisticsSection />
			<MobileAppSection />
			<TestimonialCarousel />
			<News />
		</div>
	);
};

export default Section2;

//guduainace
export const FinancialGuidance = () => {
	return (
		<section className='flex flex-wrap items-center justify-center p-8 bg-white'>
			{/* Left Section with Image and Rating */}
			<div className='relative w-full md:w-1/2'>
				<img
					src='/assets/images/cashWallet.jpg'
					alt='Financial Guidance'
					className='w-full h-auto rounded-lg'
				/>
				<div className='absolute top-[9rem] bg-white p-3 h-[5rem] w-[15rem]  shadow-lg'>
					<div className='flex items-center  justify-start flex-col'>
						<div className='text-yellow-500 text-lg animate-ping'>★★★★★</div>
						<span className='ml-2 text-sm font-semibold'>5 Star Rating Bank</span>
					</div>
				</div>
			</div>

			{/* Right Section with Text and Icons */}
			<div className='w-full md:w-1/2 px-4 mt-8 md:mt-0'>
				<h2 className='text-3xl font-bold text-gray-800'>
					Financial Guidance for Every Stage of Life.
				</h2>
				<p className='mt-4 text-gray-600'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take
					action against fraud. See it the Security Center for and Mobile and Online Banking.
				</p>
				<div className='mt-8 flex flex-col space-y-4'>
					<div className='flex items-center '>
						<div className='p-4 bg-red-20 rounded-full'>
							<FaDollarSign className='text-red-500 text-5xl' />
						</div>
						<div className='ml-4'>
							<h3 className='text-lg font-semibold'>Solution Focused</h3>
							<p className='text-gray-600'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis
								tincidunt feugiat.
							</p>
						</div>
					</div>
					<div className='flex items-center '>
						<div className='p-4 bg-red-20 rounded-full'>
							<FaCheckCircle className='text-red-500 text-5xl' />
						</div>
						<div className='ml-4'>
							<h3 className='text-lg font-semibold'>99.99% Success</h3>
							<p className='text-gray-600'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis
								tincidunt feugiat.
							</p>
						</div>
					</div>
				</div>

				<div
					style={{ animationDuration: "3s" }}
					className={`flex animate-ping  items-center justify-center left-[31rem]  shadow-sm shadow-white rounded-full w-[15rem] h-[15rem] border-t-0 border-t-transparent border-r-transparent border-r-[0px] border-[5px] border-slate-50 absolute top-[72rem]`}
				>
					<div
						className={`rounded-full w-[10rem]  m-3 h-[10rem] bg-red-600 text-white flex flex-col items-center justify-center gap-2`}
					>
						<h1 className={`text-3xl text-center capitalize font-bold`}>40 years</h1>
						<p className={`capitalize  text-white`}>of experience</p>
					</div>
				</div>
			</div>

			{/* Overlay Button */}
			<div className='relative mt-8'>
				<button className='  relative px-6 py-3 bg-red-600 text-white font-semibold uppercase overflow-hidden star-button '>
					Discover More
					<span className='absolute inset-0 flex items-center  justify-center text-2xl font-bold text-yellow-500 transition-transform duration-500 transform translate-y-full group-hover:-translate-y-0'>
						★
					</span>
				</button>
			</div>
		</section>
	);
};

//services
const Services: React.FC = () => {
	const services = [
		{
			icon: <FaPiggyBank size={30} />,
			title: "Digital Banking",
			items: ["Bank & savings accounts", "Credit cards", "Personal loans"],
		},
		{
			icon: <FaMobileAlt size={30} />,
			title: "Mobile & Web Banking",
			items: ["Instant Access", "Savings Fixed Term", "Savings Instant"],
		},
		{
			icon: <FaUserShield size={30} />,
			title: "Insurance Policies",
			items: ["Pet insurance", "Transport Insurance", "Accident insurance"],
		},
		{
			icon: <FaHome size={30} />,
			title: "Home & Property Loan",
			items: ["Residential Mortgages", "Buy-to-let Mortgages", "Building Mortgages"],
		},
		{
			icon: <FaWallet size={30} />,
			title: "All Bank Account",
			items: ["Instant Access Savings", "Instant Access Cash", "Young Savers Account"],
		},
		{
			icon: <FaCreditCard size={30} />,
			title: "Borrowing Accounts",
			items: ["Bank Credit Card", "Setter personal loan", "Overdraft"],
		},
		{
			icon: <FaUniversity size={30} />,
			title: "Private Banking",
			items: ["Dedicated personal service", "Specialist teams", "Tailored products"],
		},
		{
			icon: <FaBuilding size={30} />,
			title: "Fixed Term Accounts",
			items: ["Fixed Term Saving", "Fixed Rate Cash", "Resume your Current"],
		},
	];

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.6,
	});

	return (
		<section className='flex flex-col items-center justify-center w-full p-4 py-10 bg-red-600 bg-opacity-10 rounded-3xl'>
			<h2 className='text-3xl font-bold mb-6'>Online Banking at Your Fingertips</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl'>
				{services.map((service, index) => (
					<div
						key={index}
						ref={ref}
						className={`relative bg-white p-6 rounded-lg shadow-lg text-center overflow-hidden group transition-transform transform 
              ${inView ? " translate-y-0 transition-all duration-700" : " translate-y-10 duration-700 transition-all"}`}
						style={{ transitionDelay: `${index * 20}ms` }}
					>
						<div className='text-red-500 mb-4  group-hover:relative group-hover:text-white z-20 group-hover:animate-pulse animate-none'>
							{service.icon}
						</div>
						<h3 className='text-xl font-semibold mb-2 group-hover:relative group-hover:text-white z-20 orbitron'>
							{service.title}
						</h3>
						<ul className='text-gray-600'>
							{service.items.map((item, idx) => (
								<li key={idx} className='mb-1'>
									{item}
								</li>
							))}
						</ul>
						<div className='absolute border h-0 inset-0 bg-red-600 bg-opacity-50 group-hover:opacity-20 group-hover:duration-700 group-hover:transition-all group-hover:h-full  duration-700 transition-all z-0'></div>
					</div>
				))}
			</div>
		</section>
	);
};

//calculator
const EMICalculator = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.7,
	});

	const [loanAmount, setLoanAmount] = useState("");
	const [months, setMonths] = useState("");
	const [interestRate, setInterestRate] = useState("");
	const [emi, setEmi] = useState<string | null>(null);

	const calculateEMI = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const P = parseFloat(loanAmount);
		const r = parseFloat(interestRate) / 12 / 20;
		const n = parseInt(months);

		if (P && r && n) {
			const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
			setEmi(emiValue.toFixed(2));
		} else {
			alert("Please enter valid inputs");
		}
	};

	const resetForm = () => {
		setLoanAmount("");
		setMonths("");
		setInterestRate("");
		setEmi(null);
	};

	return (
		<section className='flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-gray-20 p-4'>
			<img
				className={`absolute bottom-0
				 top-[111rem] left-[0.5rem]`}
				src={`https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/shape-3.png`}
				alt='dotted pic'
			/>
			<div
				ref={ref}
				className={`flex-1 p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-1000 ease-out ${
					inView
						? "translate-x-0  transform transition-all duration-700 "
						: "-translate-x-10  transform transition-all duration-700"
				}`}
			>
				<h2 className='text-red-500 text-sm font-semibold mb-2'>CALCULATE LOAN</h2>
				<h1 className='text-3xl font-bold mb-6'>Online EMI Calculator</h1>
				<form className='space-y-4' onSubmit={calculateEMI}>
					<input
						type='number'
						placeholder='Loan amount'
						value={loanAmount}
						onChange={(e) => setLoanAmount(e.target.value)}
						className='w-full p-3 border border-gray-300 rounded'
					/>
					<input
						type='number'
						placeholder='Number of months'
						value={months}
						onChange={(e) => setMonths(e.target.value)}
						className='w-full p-3 border border-gray-300 rounded'
					/>
					<input
						type='number'
						placeholder='Interest rate'
						value={interestRate}
						onChange={(e) => setInterestRate(e.target.value)}
						className='w-full p-3 border border-gray-300 rounded'
					/>
					<div className='flex space-x-4'>
						<button
							type='submit'
							className='w-full p-3 bg-red-500 text-white rounded hover:bg-red-600'
						>
							Calculate
						</button>
						<button
							type='button'
							onClick={resetForm}
							className='w-full p-3 border border-red-500 text-red-500 rounded hover:bg-red-50'
						>
							Reset Data
						</button>
					</div>
				</form>
				{emi !== null && (
					<div className='mt-6 text-center'>
						<h2 className='text-2xl font-bold'>EMI: ${emi}</h2>
					</div>
				)}
			</div>
			<div
				className={`flex-1 p-6 transform   ease-out ${
					inView
						? "translate-x-0  duration-1000 transition-all"
						: "translate-x-10 duration-700 transition-all"
				}`}
			>
				<img
					src='/assets/images/officeDoc.jpg'
					alt='Woman holding credit card'
					className='rounded-lg shadow-lg'
				/>
			</div>
		</section>
	);
};

//statical section
const HeroSection: React.FC = () => {
	return (
		<section
			className='relative w-full flex items-center  justify-center h-[25rem] bg-cover bg-no-repeat bg-center'
			style={{
				backgroundImage:
					"url(https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/video-bg.jpg)",
			}}
		>
			<div className='absolute inset-0 bg-black opacity-50'></div>
			<div className='  relative top-[-2rem]  flex flex-col items-center justify-center gap-5 z-10 text-center text-white'>
				<h1 className='text-5xl  font-extrabold mb-4 w-[29rem] text-white dancing-script p-3 text-pretty '>
					The 3rd Generation Private Commercial Bank
				</h1>
				<div
					className={` animate-pulse bg-black rounded-full border-gray-500 w-[13rem] h-auto an border-[3px]`}
				>
					<button className='text-white bg-red-500 rounded-full  p-[2rem] cursor-pointer'>
						<FaPlay size={20} />
					</button>
				</div>
			</div>
		</section>
	);
};
const StatisticsSection: React.FC = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		rootMargin: "-100px 0px",
	});

	const clientsRef = useRef<HTMLHeadingElement>(null);
	const transactionsRef = useRef<HTMLHeadingElement>(null);
	const branchesRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		if (inView) {
			const clientsCount = setInterval(() => {
				if (clientsRef.current && parseInt(clientsRef.current.textContent || "0") < 50) {
					clientsRef.current.textContent =
						(parseInt(clientsRef.current.textContent || "0") + 1).toString() + "+";
				} else {
					clearInterval(clientsCount);
				}
			}, 20);

			const transactionsCount = setInterval(() => {
				if (transactionsRef.current && parseInt(transactionsRef.current.textContent || "0") < 90) {
					transactionsRef.current.textContent =
						(parseInt(transactionsRef.current.textContent || "0") + 1).toString() + "bn";
				} else {
					clearInterval(transactionsCount);
				}
			}, 20);

			const branchesCount = setInterval(() => {
				if (branchesRef.current && parseInt(branchesRef.current.textContent || "0") < 40) {
					branchesRef.current.textContent =
						(parseInt(branchesRef.current.textContent || "0") + 1).toString() + "+";
				} else {
					clearInterval(branchesCount);
				}
			}, 20);
		}
	}, [inView]);

	return (
		<section
			ref={ref}
			className='flex relative w-[80rem] h-[9rem] top-[-5rem] flex-col md:flex-row justify-center items-center '
		>
			<div className='flex items-center  justify-between w-full text-center p-4 bg-gray-50'>
				<div className={`w-[4rem] h-[4rem] rounded-full bg-red-200 flex items-center  justify-center`}>
					<FaUserAlt size={40} className='mx-auto mb-2 text-red-500' />
				</div>
				<h3 className='text-xl font-bold' ref={clientsRef}>
					0 k+
				</h3>
				<p>Happy Clients</p>{" "}
			</div>

			<div className='flex items-center  justify-between w-full text-center p-4 bg-gray-950 text-white'>
				<div className={`w-[4rem] h-[4rem] rounded-full bg-red-200 flex items-center  justify-center`}>
					<FaUniversity size={40} className='mx-auto mb-2 text-gray-900' />
				</div>
				<h3 className='text-xl font-bold text-white' ref={transactionsRef}>
					0 Bn
				</h3>
				<p>Total Transactions</p>
			</div>

			<div className='flex items-center  justify-between w-full text-center p-4 text-white bg-red-600'>
				<div className={`w-[4rem] h-[4rem] rounded-full bg-red-200 flex items-center  justify-center`}>
					{" "}
					<FaBuilding size={40} className='mx-auto mb-2 text-black' />
				</div>
				<h3 className='text-xl font-bold' ref={branchesRef}>
					0
				</h3>
				<p>Branches in USA</p>
			</div>
		</section>
	);
};

const MobileAppSection: React.FC = () => {
	return (
		<section className='flex max-w-full flex-col lg:flex-row items-center justify-center  bg-gray-300'>
			{/* Left Section with Mobile Images */}
			<div className=' flex items-center h-fit justify-center  bg-gray-100 w-[50vw] p-3'>
				<img
					src={"https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/shape-4.png"}
					alt='Mobile App'
					className='max-w-xs md:max-w-md h-auto lg:max-w-lg relative left-[5rem] m-auto'
				/>
				{/* big */}
				<img
					width={250}
					src={"https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/mockup-1.png"}
					alt='Mobile App'
					className='max-w-xs md:max-w-md h-auto lg:max-w-lg relative m-auto right-[4rem] shadow-md'
				/>
				{/* small */}
				<img
					width={200}
					src={"https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/mockup-2.png"}
					alt='Mobile App'
					className='max-w-xs md:max-w-md lg:max-w-lg relative m-auto h-auto right-[10rem] top-[3rem]'
				/>
			</div>

			{/* Right Section with Text and Buttons */}
			<div className='flex-1 text-center lg:text-left p-4  w-[50vw]'>
				<h2 className='text-red-600 font-semibold mb-2'>MOBILE APP</h2>
				<h1 className='text-3xl md:text-4xl font-bold mb-4'>Get the Fastest and Most Secure Banking</h1>
				<p className='text-gray-600 mb-4'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take
					action against fraud. See it the Security Center for and Mobile and Online Banking.
				</p>
				<div className='flex justify-center lg:justify-start space-x-4'>
					<a
						href='kjnnkjn'
						className='flex items-center px-4 py-2 rounded-md text-white bg-black space-x-2 relative overflow-hidden'
						style={{ width: "180px" }}
					>
						<div className='absolute top-0 left-0 w-full h-full bg-gray-800 transition-transform duration-300 transform -translate-y-full group-hover:-translate-y-0'></div>
						<FaGooglePlay className='text-xl z-10' />
						<div className='text-left z-10'>
							<p className='text-xs'>Get it on</p>
							<p className='font-semibold'>Google Play</p>
						</div>
					</a>
					<a
						href='kjnnkjn'
						className='flex items-center px-4 py-2 rounded-md text-white bg-black space-x-2 relative overflow-hidden'
						style={{ width: "180px" }}
					>
						<div className='absolute top-0 left-0 w-full h-full bg-gray-800 transition-transform duration-300 transform -translate-y-full group-hover:-translate-y-0'></div>
						<FaApple className='text-xl z-10' />
						<div className='text-left z-10'>
							<p className='text-xs'>Download on the</p>
							<p className='font-semibold'>App Store</p>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};

const TestimonialCarousel = () => {
	const testimonials = [
		{
			name: "Rolier Demonil",
			position: "Manager",
			image: "https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/testimonial-3.png",
			review: "Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.",
		},
		{
			name: "Sandra Bullock",
			position: "Manager",
			image: "https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/testimonial-1.png",
			review: "Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.",
		},
		{
			name: "Julien Anthor",
			position: "Manager",
			image: "https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/testimonial-2.png",
			review: "Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.",
		},
	];
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<section className='py-12 bg-red-100 '>
			<div className='container mx-auto text-center mb-8'>
				<h2 className='text-red-600 font-semibold'>TESTIMONIALS</h2>
				<h1 className='text-4xl font-bold'>Love from Our Clients</h1>
			</div>
			<div className='container mx-auto'>
				<Slider {...settings}>
					{testimonials.map((testimonial, index) => (
						<div key={index} className='p-4'>
							<div className='bg-white p-6 rounded-lg shadow-md text-center'>
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className='w-20 h-20 rounded-full mx-auto mb-4'
								/>
								<h3 className='text-xl font-semibold'>{testimonial.name}</h3>
								<p className='text-gray-600'>{testimonial.position}</p>
								<div className='flex justify-center mb-4'>
									<div className='flex space-x-1 text-yellow-500'>
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												xmlns='http://www.w3.org/2000/svg'
												fill='currentColor'
												viewBox='0 0 24 24'
												strokeWidth='0.5'
												stroke='currentColor'
												className='w-4 h-4'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M12 4.5l1.9 3.85 4.24.62-3.07 2.99.73 4.25L12 14.75l-3.8 2 0.73-4.25-3.07-2.99 4.24-.62L12 4.5z'
												/>
											</svg>
										))}
									</div>
								</div>
								<p className='text-gray-600'>{testimonial.review}</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

const News: React.FC = () => {
	return (
		<div className='min-h-screen bg-gray-100 p-8'>
			<p className={`text-red-600 m-3 text-center uppercase font-medium`}>latest news</p>
			<h1 className='text-3xl font-bold text-center mb-8 jost'>Our Latest Media Update</h1>
			<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
				<Card
					date='November 7, 2023'
					title='Self-Guided Driving & Tours Walk Of Greater City'
					imgSrc='https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/news-1.jpg'
				/>
				<Card
					date='November 7, 2023'
					title='Assistance For Homes & Properties Real Estate'
					imgSrc='https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/news-2.jpg'
				/>
				<Card
					date='November 7, 2023'
					title='Long-Term Vision Of Health & Attractive Facility'
					imgSrc='https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/news-3.jpg'
				/>
			</div>
		</div>
	);
};

interface CardProps {
	date: string;
	title: string;
	imgSrc: string;
}

const Card: React.FC<CardProps> = ({ date, title, imgSrc }) => {
	return (
		<div
			style={{ background: "linear-gradient(to bottom, #d3d3d3, #808080)" }}
			className='relative group  h-[35rem] flex flex-col justify-between max-w-[20rem] mx-auto overflow-hidden b p-4 rounded-lg shadow-lg'
		>
			<img className='object-cover shadow-md sha object-center w-full h-56' src={imgSrc} alt={title} />

			<div className='flex mt-3 flex-col items-start z-10 p-3  gap-3 shadow-sm h-full'>
				<div className='mb-2 text-sm bg-gray-50 p-2 rounded-full'>
					<FaCalendarAlt className='inline mr-1 text-red-600' /> {date}
				</div>
				{/* title */}
				<h2 className='text-lg font-bold text-gray-50'>{title}</h2>

				{/* comments */}
				<div className='mt-2 flex items-center gap-4 w-full text-sm'>
					<div className={`flex items-center justify-center`}>
						<FaUser className='inline text-red-600' /> <p className={`text-gray-50`}>admin</p>
					</div>
					<div className={`flex items-center justify-center`}>
						<FaComments className='inline text-red-600' />
						<p className={`text-gray-50`}>No Comments</p>
					</div>
				</div>

				{/* read more */}
				<button className='mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition'>
					Read More
				</button>
			</div>

			<div className='absolute border h-0 inset-0 bg-gray-600 bg-opacity-50 group-hover:opacity-20 group-hover:duration-700 group-hover:transition-all group-hover:h-full  duration-700 transition-all z-0'></div>
		</div>
	);
};
