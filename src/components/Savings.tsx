import React from "react";

const SavingComponent = () => {
	return (
		<div className='flex relative top-[5rem] flex-col md:flex-row justify-between items-center bg-gray-100 p-6 rounded-lg shadow-lg'>
			<div className='md:w-1/2 p-4'>
				<h2 className='text-3xl font-bold mb-4'>Saving with Monzo</h2>
				<p className='text-lg mb-4'>
					Saving is hard, so we made it simpler. Create a Savings Pot in minutes to earn up to 4.90%
					(AER/Gross fixed) interest on your money, fixed for 6 months with a £500 minimum deposit
					to open.
				</p>
				<button className='bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-700 transition duration-300'>
					Create a Savings Pot
				</button>
				<button className='bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300'>
					Open a Monzo account
				</button>
				<p className='text-sm text-gray-600 mt-4'>
					You need a CCB Current Account. Ts&Cs apply. UK residents only.
				</p>
			</div>
			<div className='md:w-1/2 p-4'>
				<img src='/assets/images/savings.jpg' alt='Savings' className='rounded-lg w-full' />
			</div>
		</div>
	);
};

export default React.memo(SavingComponent);

export const QRComponent = () => {
	return (
		<div className='flex items-center justify-center bg-gray-100 min-h-screen'>
			<div className='flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-8'>
				<div className='md:w-2/3'>
					<h2 className='text-2xl font-bold mb-4'>You’ll need your phone for that</h2>
					<p className='text-lg mb-6'>
						Open the camera on your phone and scan the QR code to go to the Monzo app.
					</p>
					<div className='flex space-x-4'>
						<a href='https://apps.apple.com' target='_blank' rel='noopener noreferrer'>
							<img
								src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
								alt='Download on the App Store'
								className='h-12'
							/>
						</a>
						<a href='https://play.google.com' target='_blank' rel='noopener noreferrer'>
							<img
								src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
								alt='Get it on Google Play'
								className='h-12'
							/>
						</a>
					</div>
				</div>
				<div className='md:w-1/3 mt-8 md:mt-0 md:ml-8'>
					<img src='/mnt/data/image.png' alt='QR Code' className='w-48 h-48 object-contain' />
				</div>
			</div>
		</div>
	);
};
