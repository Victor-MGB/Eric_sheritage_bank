import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
	return (
		<footer className='bg-black text-white py-5 px-4 md:py-10'>
			<SubscriptionForm />
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
				<div className={`flex flex-col`}>
					<h2 className='text-xl font-bold mb-4'>central National Bank</h2>
					<p>
						Our banking services provide secure and convenient financial solutions for all your
						needs. With a wide range of products and services, we strive to offer personalized
						experiences tailored to your unique requirements.
					</p>

					<div className='flex mt-4 items-center justify-between w-[10rem] bg-red-500 rounded-lg p-[1rem]'>
						<a
							href='https://www.facebook.com'
							className='text-white'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaFacebook />
						</a>
						<a
							href='https://www.twitter.com'
							className='text-white'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaTwitter />
						</a>
						<a
							href='https://www.instagram.com'
							className='text-white scale-95'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaInstagram />
						</a>
					</div>
				</div>
				<FooterLinks />
				<BranchLocator />
			</div>

			<p className={`text-sm text-center m-auto capitalize`}>
				copyright {new Date().getFullYear()}. all right reserved
			</p>
		</footer>
	);
};

export default Footer;

const SubscriptionForm: React.FC = () => {
	return (
		<div className='bg-red-600 items-center p-2 h-[8rem] flex  justify-between '>
			<h2 className='md:text-2xl text-sm md:font-bold w-fit md:w-[12rem] text-white jost md:mb-4 p-1 md:p-3  md:mx-[2rem]'>
				Subscribe us to Receive Latest Updates
			</h2>
			<form className='flex md:flex flex-col  justify-center p-1 bg-green-100 md:p-3 items-center gap-3 jus'>
				<input type='email' className=' p-2 rounded-l-md text-black bg-blue-200 border ' placeholder='Your Email' />
				<button className='bg-black p-1 text-white text-xs md:text-xl md:p-2 rounded-r-md'>Subscribe Now</button>
			</form>
		</div>
	);
};

const BranchLocator: React.FC = () => {
	return (
		<div>
			<h3 className='text-lg font-bold mb-4 text-red-600'>Find Our Branch & ATM</h3>
			<form className='space-y-4'>
				<select className='p-2 w-full bg-gray-800 text-white'>
					<option>Branch</option>
				</select>
				<input type='text' className='p-2 w-full bg-gray-800 text-white' placeholder='Location' />
				<button className='bg-red-700 text-white p-2 w-full'>Find on Map</button>
			</form>
		</div>
	);
};

const FooterLinks: React.FC = () => {
	return (
		<div className='grid grid-cols-2 gap-6'>
			<div>
				<h3 className='text-lg font-bold mb-4 text-red-600'>Explore</h3>
				<ul>
					<li>
						<Link to={"/about"}>About Us</Link>
					</li>
					<li>
						<a href='#testimonials'>Testimonials</a>
					</li>
					<li>
						<a href='/careers'>Careers</a>
					</li>
					<li>
						<a href='/career-detail'>Career Detail</a>
					</li>
					<li>
						<Link to={"/FAQs"}>FAQ's</Link>
					</li>
				</ul>
			</div>
			<div>
				<h3 className='text-lg font-bold mb-4'>Useful Links</h3>
				<ul>
					<li className={`group w-fit `}>
						<a href='/credit-card'>Credit Card</a>
					</li>
					<li>
						<a href='/savings-account'>Saving Account</a>
					</li>
					<li>
						<a href='/gift-cards'>Digital Gift Cards</a>
					</li>
					<li>
						<a href='/apply-loans'>Apply For Loans</a>
					</li>
					<li>
						<a href='/mobile-app'>Mobile Application</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
