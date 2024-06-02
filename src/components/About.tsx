import React from "react";
import { FaComments, FaHandHoldingUsd, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { FinancialGuidance } from "./Section2";

const About: React.FC = () => {
	return (
		<>
			<FinancialGuidance />
			<Mission />
			<CardsContainer />
			<Main />
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

//credit card
type CreditCardProps = {
	name: string;
	cardNumber: string;
	expiry: string;
	type: "Silver" | "Gold" | "Platinum";
	description: string;
};

const cardColors: { [key: string]: string } = {
	Silver: "bg-gradient-to-r from-purple-500 to-green-500",
	Gold: "bg-gradient-to-r from-orange-500 to-purple-500",
	Platinum: "bg-gray-300",
};

const CreditCard: React.FC<CreditCardProps> = ({ name, cardNumber, expiry, type, description }) => {
	return (
		<div className='bg-white p-4 rounded-lg shadow-lg text-center'>
			<div className={`p-6 rounded-lg shadow-md ${cardColors[type]}`}>
				<div className='text-white'>
					<div className='text-xl font-semibold'>{name}</div>
					<div className='mt-4 text-lg'>{cardNumber}</div>
					<div className='mt-2 text-md'>Expiry: {expiry}</div>
					<div className='mt-2 text-md font-bold'>{type}</div>
				</div>
			</div>
			<div className='mt-4'>
				<p className='text-gray-700'>{description}</p>
				<button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
					Apply for Card
				</button>
			</div>
		</div>
	);
};

const Main = () => {
	return (
		<div className='min-h-screen bg-gray-100 p-8'>
			<h1 className='text-4xl font-bold text-center mb-8'>Credit Cards We Provide</h1>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				<CreditCard
					name='Kin Jong Dilam'
					cardNumber='1234 5678 9101 1213'
					expiry='11/24'
					type='Silver'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt.'
				/>
				<CreditCard
					name='Donald Trump'
					cardNumber='1234 5678 9101 1234'
					expiry='11/24'
					type='Gold'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt.'
				/>
				<CreditCard
					name='Barak Obama'
					cardNumber='1234 5678 9101 1213'
					expiry='11/24'
					type='Platinum'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt.'
				/>
			</div>
		</div>
	);
};
