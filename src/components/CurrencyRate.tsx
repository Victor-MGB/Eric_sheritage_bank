import axios from "axios";
import React, { useEffect, useState } from "react";
import {  FaEuroSign, FaNairaSign, FaMoneyBillWave } from "react-icons/fa6";
import { FaPoundSign } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CurrencyRates: React.FC = () => {
	const [exchangeRates, setExchangeRates] = useState<any>(null);
	const [baseCurrency, setBaseCurrency] = useState<string>("USD");
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [searchTerm, setSearchTerm] = useState<string>("");

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await getExchangeRates(baseCurrency);
				setExchangeRates(data.conversion_rates);
				setError(null);
			} catch (err) {
				setError("Failed to fetch exchange rates");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [baseCurrency]);

	const handleBaseCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setBaseCurrency(e.target.value);
	};

	const filteredRates =
		exchangeRates &&
		Object.entries(exchangeRates).filter(([currency, rate]) =>
			currency.toLowerCase().includes(searchTerm.toLowerCase())
		);

	return (
		<div className='w-[60rem] mx-auto p-6 bg-primary rounded-lg shadow-lg '>
			<h2 className='text-3xl mt-[3rem] font-bold mb-6 text-center flex items-center justify-center bg-blue-500 text-white py-2 rounded-md'>
				<FaMoneyBillWave className='mr-2' /> Currency Exchange Rates
			</h2>
			<div className='mb-4 flex justify-between items-center bg-transparent'>
				<div>
					<label htmlFor='baseCurrency' className='block text-gray-700 mb-2 mr-2'>
						Base Currency:
					</label>
					<select
						id='baseCurrency'
						value={baseCurrency}
						onChange={handleBaseCurrencyChange}
						className='p-2 border w-[10rem] border-gray-300 rounded-lg'
					>
						<option value='USD'>USD</option>
						<option value='EUR'>
							EUR <FaEuroSign className='inline ml-1' />
						</option>
						<option value='GBP'>
							GBP <FaPoundSign className='inline ml-1' />
						</option>
						<option value='NGN'>
							NGN <FaNairaSign className='inline ' />
						</option>
						{/* Add more currencies */}
						<option value='JPY'>JPY</option>
						<option value='CAD'>CAD</option>
						<option value='AUD'>AUD</option>
						<option value='CNY'>CNY</option>
					</select>
				</div>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search Currency...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className='p-2 pl-8 border border-gray-300 rounded-lg'
					/>
					<div className='absolute top-0 left-2 flex items-center justify-center h-full text-gray-500'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M17 19l-5-5m0 0l-5 5m5-5V3'
							/>
						</svg>
					</div>
				</div>
			</div>
			{loading ? (
				<p className='text-center flex items-center justify-center'>
					<AiOutlineLoading3Quarters className='animate-spin mr-2' /> Loading...
				</p>
			) : error ? (
				<p className='text-red-500 text-center'>{error}</p>
			) : (
				<div className='overflow-x-auto'>
					<table className='min-w-full bg-white shadow-md rounded-lg'>
						<thead className='bg-gray-200'>
							<tr>
								<th className='px-6 py-3 border-b text-left text-sm font-medium text-gray-900'>
									Currency
								</th>
								<th className='px-6 py-3 border-b text-left text-sm font-medium text-gray-900'>
									Exchange Rate
								</th>
							</tr>
						</thead>
						<tbody>
							{filteredRates &&
								filteredRates.map(([currency, rate]: [string, number]) => (
									<tr key={currency} className='hover:bg-gray-100'>
										<td className='px-6 py-4 border-b text-sm text-gray-900'>
											{currency}
										</td>
										<td className='px-6 py-4 border-b text-sm text-gray-900'>
											{rate}
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default CurrencyRates;

const API_URL = "https://v6.exchangerate-api.com/v6";
const API_KEY = "90f39f506bd222b58c671097";

export const getExchangeRates = async (baseCurrency: string): Promise<any> => {
	try {
		const response = await axios.get(`${API_URL}/${API_KEY}/latest/${baseCurrency}`);
        if ( response.data.result === "success" )
        {
            console.log(response)
			return response.data;
		} else {
			throw new Error("Failed to fetch exchange rates");
		}
	} catch (error) {
		console.error("Error fetching exchange rates:", error);
		throw error;
	}
};
