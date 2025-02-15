import React, { useEffect, useRef, useState } from "react";

const TravelInfoComponent: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const elementRef = useRef<HTMLDivElement>(null);

	const handleScroll = () => {
		if (elementRef.current) {
			const rect = elementRef.current.getBoundingClientRect();
			const isInView = rect.top >= 10 && rect.bottom <= window.innerHeight;
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
			className={` transform duration-500 ${
				isVisible ? "opacity-100 z-10 translate-x-0" : "opacity-0 -translate-x-[10rem]"
			}min-h-screen bg-gray-100 p-6 flex flex-col items-center`}
		>
			<h1 className='text-4xl w-fit text-nowrap font-bold mb-8'>Travel with Ease when Banking with SHB</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-lg'>
				<TravelFeesCard />
				<ExchangeRateCard />
				<CashWithdrawalsCard />
			</div>
		</div>
	);
};

export default TravelInfoComponent;

const CashWithdrawalsCard: React.FC<{ classStyle?: string }> = ({ classStyle }) => (
	<div
		className={` ${classStyle} bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300`}
	>
		<h2 className='text-2xl font-bold mb-4'>Make free cash withdrawals</h2>
		<p className='mb-4'>
			If SHB is your main bank account, make unlimited fee-free cash withdrawals abroad in the European
			Economic Area (EEA), and up to £200 every 30 days for free outside the EEA. After that, we’ll charge
			3%.
		</p>
	</div>
);

const ExchangeRateCard: React.FC<{ classStyle?: string }> = ({ classStyle }) => (
	<div
		className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ${classStyle}`}
	>
		<h2 className='text-2xl font-bold mb-4'>Stay in the know</h2>
		<p className='mb-4'>
			You’ll see the real exchange rate in the app when you land. We'll also send you a spending report so
			you can look back on the cost of your trip.
		</p>
	</div>
);

const TravelFeesCard: React.FC<{ classStyle?: string }> = ({ classStyle }) => (
	<div
		className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ${classStyle}`}
	>
		<h2 className='text-2xl font-bold mb-4'>Free yourself from travel fees</h2>
		<p className='text-lg mb-4'>Get the real exchange rate</p>
		<p className='mb-4'>
			We don’t charge fees for spending on your card abroad, and we pass{" "}
			<span className={`text-blue-500 hover:underline hover:text-blue-800`}>Mastercard's exchange</span>{" "}
			rate directly onto you, without extra charges.
		</p>
	</div>
);
