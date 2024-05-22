import React, { useEffect, useRef, useState } from "react";
import { IoMdStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div
			className='flex flex-col gap-[5rem] items-center justify-between p-10 bg-cover bg-center bg-gray-100'
			style={{ backgroundImage: "url(/assets/images/skyscraper.jpg)" }}
		>
			<div className={`flex self-start justify-between  `}>
				<HeroWritesUp />
				<InfoCard />
			</div>

			<ButtomWriteUp />
		</div>
	);
};

export default Hero;

/**
 * Renders a hero section with a background image, a centered content box, and call-to-action buttons.
 * The hero section displays a title, a description, and two buttons for "Get Started" and "Learn More".
 * The content box is styled with a white background and a semi-transparent overlay.
 */
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

/**
 * Renders an information card component with a background image, title, description, and badges.
 * The card is centered within a container with a semi-transparent gray background.
 */
const InfoCard: React.FC = () => {
	return (
		<div className='w-[50rem] h-auto bg-opacity-30 flex items-center justify-center bg-gray-100'>
			<div
				className='relative w-full max-w-2xl mx-auto bg-cover bg-center rounded-lg shadow-lg overflow-hidden'
				style={{ backgroundImage: `url('/assets/images/cashWallet.jpg')` }}
			>
				<div className='absolute inset-0 bg-black bg-opacity-50'></div>
				<div className='relative p-8 text-white'>
					<h2 className='text-3xl font-bold mb-4'>
						Automate bills. Organise how you spend. Save in clever new ways.
					</h2>
					<p className='text-lg mb-4'>
						Apply for a full UK current account in 10 minutes, for free.
					</p>
					<p className='text-lg mb-4'>Download your new favourite bank</p>
					<p className='text-sm mb-6'>UK residents only. Ts&Cs apply.</p>
					<div className='flex items-center justify-between'>
						<div className='flex items-center space-x-4'>
							<span className='bg-blue-600 py-1 px-3 rounded'>
								Best Banking App Winner 2023
							</span>
							<span className='bg-blue-600 py-1 px-3 rounded'>
								Current Account Switch Guarantee marque
							</span>
							<span className='bg-blue-600 py-1 px-3 rounded'>FSCS protected marque</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

/**
 * A React component that displays a bottom section with information about a bank's customer base and reviews.
 *
 * The component uses the `useState` and `useEffect` hooks to track the visibility of the component based on the user's scroll position. When the component is in view, it fades in with a smooth animation.
 *
 * The component displays the following information:
 * - A headline stating the number of people who bank with the bank
 * - A section with customer reviews, including a rating and a link to leave a review
 */
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
