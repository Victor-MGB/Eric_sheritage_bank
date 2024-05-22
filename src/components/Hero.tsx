import React, { useEffect, useRef, useState } from "react";
import { IoMdStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div
			className='flex flex-col gap-[5rem] items-center justify-between p-10 bg-cover bg-center bg-gray-100'
			style={{ backgroundImage: "url(/assets/images/skyscraper.jpg)" }}
		>
			<div className={`flex self-start `}>
				<HeroWritesUp />
			</div>

			<ButtomWriteUp />
		</div>
	);
};

export default Hero;

const HeroWritesUp: React.FC = () => {
	return (
		<div
			className='flex  items-center justify-center p-10 bg-cover bg-center h-screen'
			style={{ backgroundImage: "url(/assets/images/skyscraper.jpg)" }}
		>
			<div className='p-8 max-w-md bg-white bg-opacity-70 rounded-lg shadow-lg'>
				<h1 className='text-5xl font-bold mb-4 text-gray-800 dancing-script'>
					Banking Made Simple. Life Made Better.
				</h1>
				<p className='text-lg mb-6 text-gray-700'>
					Experience a new era of banking with
					<span className='text-xl text-gray-800 shadow-md jost font-bold px-2 mx-1'>
						CENTRAL CITY BANK
					</span>
					. Manage your finances effortlessly, anytime, anywhere.
				</p>
				<div className='mb-4'>
					<a
						href='#get-started'
						className='bg-blue-600 text-white py-2 px-4 rounded mr-2 transition duration-300 hover:bg-blue-700'
					>
						Get Started
					</a>
					<a
						href='#learn-more'
						className='bg-gray-600 text-white py-2 px-4 rounded transition duration-300 hover:bg-gray-700'
					>
						Learn More
					</a>
				</div>
				<p className='text-gray-600 jost'>
					Join millions of satisfied customers who trust us to handle their banking needs. With
					innovative tools, top-notch security, and personalized service, we’re here to help you
					achieve your financial goals.
				</p>
			</div>
		</div>
	);
};

const ButtomWriteUp = () => {
	const [isVisible, setIsVisible] = useState(false);
	const elementRef = useRef<HTMLDivElement>(null);

	const handleScroll = () => {
		if (elementRef.current) {
			const rect = elementRef.current.getBoundingClientRect();
			const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
			setIsVisible(isInView);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		// Initial check
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			ref={elementRef}
			className={`flex flex-col items-center bg-gray-50 bg-opacity-15 p-3 justify-center gap-[4rem bg-] rounded-md transform transition-all duration-700 ${
				isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[5rem]"
			} `}
		>
			<p className={`text-3xl text-primary font-extrabold font-sans uppercase`}>
				12.5 millions of people bank with Central city bank. join them now
			</p>

			<div className={`flex items-center gap-2 capitalize text-neutral-400`}>
				<p>our customers says</p>
				<p className={`flex gap-2 items-center justify-center w-fit flex-nowrap`}>
					Great review
					<span className={`flex gap-1 text-[30px] bg-lime-600 p-2`}>
						<IoMdStarOutline className='text-yellow-500 ' />
						<IoMdStarOutline className='text-yellow-500' />
						<IoMdStarOutline className='text-yellow-500' />{" "}
						<IoMdStarOutline className='text-yellow-500' /> <IoMdStarOutline />
					</span>{" "}
				</p>
				<p className={``}>4.0 out of 5 based on 3 million reviews</p>
				<p
					className={`flex items-center justify-center gap-1 bg-slate-100 rounded-full p-2 w-fit uppercase`}
				>
					trust pilot <IoMdStarOutline className={`text-lime-400 text-[28px]`} />
				</p>

				<Link to={`nnkjnkj`} className={`text-cyan-600 text-sm cursor-pointer hover:underline`}>
					{" "}
					give us a rating
				</Link>
			</div>
		</div>
	);
};
