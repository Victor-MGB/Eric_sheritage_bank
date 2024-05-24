import React from "react";
import {
	FaComments,
	FaFacebookF,
	FaHandHoldingUsd,
	FaInstagram,
	FaLinkedinIn,
	FaMapMarkerAlt,
	FaTwitterSquare,
	FaUsers,
} from "react-icons/fa";

const About: React.FC = () => {
	return (
		<>
			<div className='flex flex-col lg:flex-row items-center p-8 rounded-lg shadow-lg bg-primary'>
				{/* Text Section */}
				<div className='lg:w-1/2 lg:pr-8 mb-8 lg:mb-0'>
					<h2 className='text-3xl font-bold mb-4 text-slate-100 dancing-script'>
						We're building a bank, together
					</h2>
					<p className='text-lg text-gray-700 jost'>
						By solving your problems, treating you fairly and being totally transparent, we
						believe we can make banking better.
					</p>
				</div>
				{/* SVG Section */}
				<div className='lg:w-1/2'>
					<img
						src='assets/images/handshake.svg'
						alt='Banking illustration'
						className='w-full h-auto'
					/>
				</div>
			</div>

			<Mission />
			<CardsContainer />

			<h1 className={`orbitron text-center text-2xl text-neutral-600`}>how can we help you..?</h1>
			<p className={`text-center jost text-neutral-600`}>
				email us{" "}
				<a className={`hover:underline text-primary`} href='mailto:@CBSSupport'>
					@CBSSupport
				</a>{" "}
				CBS Support(Opens Overlay): the official customer service
			</p>
			<div
				className={`w-fit p-2 my-3 hover:cursor-pointer hover:bg-blue-600 text-nowrap m-auto rounded-md border-[2px] border-primary text-xl capitalize`}
			>
				apply for CCB account
			</div>

			<div className='flex justify-center mt-8'>
				<a
					href='https://twitter.com/yourhandle'
					target='_blank'
					rel='noopener noreferrer'
					className='mx-4 text-gray-600 hover:text-gray-800'
				>
					<FaTwitterSquare size={24} />
				</a>
				<a
					href='https://facebook.com/yourhandle'
					target='_blank'
					rel='noopener noreferrer'
					className='mx-4 text-gray-600 hover:text-gray-800'
				>
					<FaFacebookF size={24} />
				</a>
				<a
					href='https://instagram.com/yourhandle'
					target='_blank'
					rel='noopener noreferrer'
					className='mx-4 text-gray-600 hover:text-gray-800'
				>
					<FaInstagram size={24} />
				</a>
				<a
					href='https://linkedin.com/in/yourhandle'
					target='_blank'
					rel='noopener noreferrer'
					className='mx-4 text-gray-600 hover:text-gray-800'
				>
					<FaLinkedinIn size={24} />
				</a>
			</div>
		</>
	);
};

export default About;

const Mission: React.FC = () => {
	return (
		<div className='flex flex-col lg:flex-row items-center bg-gray-50 p-8 rounded-lg shadow-lg'>
			{/* Text Section */}
			<div className='lg:w-1/2 lg:pr-8 mb-8 lg:mb-0'>
				<h2 className='text-3xl font-bold mb-4'>We're here to make money work for everyone</h2>
				<p className='text-lg text-gray-700'>
					Now more than 9 million people use our hot coral cards to manage their money and spend
					around the world. Download the app today to join them.
				</p>
			</div>
			{/* SVG Section */}
			<div className='lg:w-1/2'>
				<img
					src='assets/images/fina.jpg'
					alt='Financial freedom illustration'
					className='w-full h-auto'
				/>
			</div>
		</div>
	);
};

const Card: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string; linkText: string }> = ({
	icon,
	title,
	description,
	link,
	linkText,
}) => {
	return (
		<div className='bg-white p-6 rounded-lg shadow-md mb-6 flex items-start'>
			<div className='text-2xl mr-4 text-blue-500'>{icon}</div>
			<div>
				<h3 className='text-xl font-bold mb-2'>{title}</h3>
				<p className='text-gray-700 mb-4'>{description}</p>
				<a href={link} className='text-blue-500 font-semibold'>
					{linkText}
				</a>
			</div>
		</div>
	);
};

const CardsContainer: React.FC = () => {
	return (
		<div className='container mx-auto p-6'>
			<Card
				icon={<FaHandHoldingUsd />}
				title='We believe in an alternative to the banking of the past'
				description="We're focused on solving problems, rather than selling financial products. We want to make the world a better place and change people's lives through Monzo."
				link='/social-programme'
				linkText='View our social programme ›'
			/>
			<Card
				icon={<FaUsers />}
				title='We’re building CCB together'
				description="We're doing things differently. For too long, banking has been obtuse, complex and opaque. We want to change that and build a bank with everyone, for everyone. Our amazing community suggest features, test the app and give us constant feedback so we can build something everyone loves."
				link='/community-forum'
				linkText='View our community forum ›'
			/>
			<Card
				icon={<FaComments />}
				title='Our way with words'
				description='How we communicate changes how people feel about us, so we’d better make sure our words reflect what we stand for. Our tone of voice guidelines exist to do just that.'
				link='/tone-of-voice'
				linkText='View our tone of voice ›'
			/>
			<Card
				icon={<FaMapMarkerAlt />}
				title='We’re a fast-growing team based in London'
				description='Home is a 3 minute walk from Liverpool Street station, but we also have offices in Cardiff and lots of people around the world.'
				link='/careers'
				linkText='View our careers page ›'
			/>
		</div>
	);
};
