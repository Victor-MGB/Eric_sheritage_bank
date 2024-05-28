import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
	return (
		<footer className='bg-black text-white py-10'>
			<SubscriptionForm />
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
				<div className={`flex flex-col`}>
					<h2 className='text-xl font-bold mb-4'>central city Bank</h2>
					<p>
						Tincidunt neque pretium lectus donec risus. Mauris mi tempor nunc orci leo consequat
						vitae erat gravida lobortis nec et sagittis.
					</p>
					<div className='flex mt-4 items-center justify-between w-[10rem] bg-red-500 rounded-lg p-[1rem]'>
						<a
							href='https://www.facebook.com'
							className='text-white'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaFacebook/>
						</a>
						<a
							href='https://www.twitter.com'
							className='text-white'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaTwitter/>
						</a>
						<a
							href='https://www.instagram.com'
							className='text-white scale-95'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaInstagram/>
						</a>
					</div>
				</div>
				<FooterLinks />
				<BranchLocator />
			</div>

			<p className={`text-sm text-center m-auto capitalize`}> copyright 2024. all right reserved</p>
		</footer>
	);
};

export default Footer;

const SubscriptionForm: React.FC = () => {
	return (
		<div className='bg-red-600 items-center p-2 h-[8rem] flex  justify-between '>
			<h2 className='text-2xl font-bold w-[12rem] text-white jost mb-4 p-3  mx-[2rem]'>
				Subscribe us to Receive Latest Updates
			</h2>
			<form className='flex justify-center bg-green-100 p-3 items-center jus'>
				<input type='email' className='p-2 rounded-l-md text-black  border ' placeholder='Your Email' />
				<button className='bg-black text-white p-2 rounded-r-md'>Subscribe Now</button>
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
