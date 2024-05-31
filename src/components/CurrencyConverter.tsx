import React, { useState } from "react";
import axios from "axios";
import { FaDollarSign, FaEuroSign, FaPoundSign, FaExchangeAlt } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CurrencyConverter: React.FC = () => {
	const [amount, setAmount] = useState<number>(1);
	const [baseCurrency, setBaseCurrency] = useState<string>("USD");
	const [targetCurrency, setTargetCurrency] = useState<string>("EUR");
	const [conversionResult, setConversionResult] = useState<number | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();

	const handleConvert = async () => {
		setLoading(true);
		setError(null);

		try {
			const response = await axios.get(
				`https://v6.exchangerate-api.com/v6/90f39f506bd222b58c671097/pair/${baseCurrency}/${targetCurrency}/${amount}`
			);
			setConversionResult(response.data.conversion_result);
		} catch (err) {
			setError("Failed to fetch conversion rate");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10'>
			<h2 className='text-3xl font-bold mb-6 text-center text-red-600'>Currency Converter</h2>
			<p className='mb-8 text-center text-gray-700'>
				Welcome to our state-of-the-art currency converter! With real-time exchange rates and a
				user-friendly interface, our converter allows you to quickly and easily find the value of your
				currency in different countries. Whether you're traveling, trading, or just curious about the
				market, our tool provides accurate and up-to-date information to meet your needs. Simply select
				your base currency and explore the conversion rates for a wide range of international
				currencies.
				<span
					onClick={() => navigate("/rates")}
					className='block text-red-600 underline italic cursor-pointer mt-2'
				>
					Check our real-time rates chart
				</span>
			</p>

			<div className='bg-white p-6 rounded-lg shadow-inner'>
				<div className='mb-4'>
					<label htmlFor='amount' className='block text-gray-700 mb-2'>
						Amount
					</label>
					<input
						type='number'
						id='amount'
						value={amount}
						onChange={(e) => setAmount(parseFloat(e.target.value))}
						className='w-full p-3 border border-gray-300 rounded-lg'
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='baseCurrency' className='block text-gray-700 mb-2'>
						From
					</label>
					<select
						id='baseCurrency'
						value={baseCurrency}
						onChange={(e) => setBaseCurrency(e.target.value)}
						className='w-full p-3 border border-gray-300 rounded-lg'
					>
						<option value='USD'>
							USD <FaDollarSign />
						</option>
						<option value='EUR'>
							EUR <FaEuroSign />
						</option>
						<option value='GBP'>
							GBP <FaPoundSign />
						</option>
						<option value='NGN'>
							NGN <FaNairaSign />
						</option>
						<option value='JPY'>JPY</option>
						<option value='CAD'>CAD</option>
						<option value='AUD'>AUD</option>
						<option value='CNY'>CNY</option>
						{/* Add more currencies as needed */}
					</select>
				</div>

				<div className='mb-4'>
					<label htmlFor='targetCurrency' className='block text-gray-700 mb-2'>
						To
					</label>
					<select
						id='targetCurrency'
						value={targetCurrency}
						onChange={(e) => setTargetCurrency(e.target.value)}
						className='w-full p-3 border border-gray-300 rounded-lg'
					>
						<option value='USD'>
							USD <FaDollarSign />
						</option>
						<option value='EUR'>
							EUR <FaEuroSign />
						</option>
						<option value='GBP'>
							GBP <FaPoundSign />
						</option>
						<option value='NGN'>
							NGN <FaNairaSign />
						</option>
						<option value='JPY'>JPY</option>
						<option value='CAD'>CAD</option>
						<option value='AUD'>AUD</option>
						<option value='CNY'>CNY</option>
						{/* Add more currencies as needed */}
					</select>
				</div>
				<button
					onClick={handleConvert}
					className='w-full py-3 bg-red-600 text-white rounded-lg flex items-center justify-center'
				>
					{loading ? (
						<FaExchangeAlt className='animate-spin' />
					) : (
						<span>
							Convert <FaExchangeAlt className='ml-2' />
						</span>
					)}
				</button>
				{error && <p className='mt-4 text-red-500 text-center'>{error}</p>}
				{conversionResult !== null && (
					<p className='mt-4 text-center text-gray-700'>
						{amount} {baseCurrency} = {conversionResult.toFixed(2)} {targetCurrency}
					</p>
				)}
			</div>
		</div>
	);
};

export default CurrencyConverter;
