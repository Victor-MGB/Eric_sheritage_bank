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
	const navi = useNavigate();

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
		<div className='max-w-[45rem] mx-auto p-4 bg-white flex  relative top-[4rem] rounded-lg shadow-lg'>
			<p className=' text-wrap  m-3 w-[30rem] mb-4 text-sm text-gray-700'>
				<h2 className='text-2xl font-bold mb-4 text-center text-blue-600  '>Currency Converter</h2>
				Welcome to our state-of-the-art currency converter! With real-time exchange rates and a
				user-friendly interface, our converter allows you to quickly and easily find the value of your
				currency in different countries. Whether you're traveling, trading, or just curious about the
				market, our tool provides accurate and up-to-date information to meet your needs. Simply select
				your base currency and explore the conversion rates for a wide range of international
				currencies.{" "}
                <span
                    
					onClick={() => navi("/rates")}
					className={`underline text-blue-600 italic cursor-pointer`}
				>
					check our real time rates chart
				</span>
			</p>

			<div className={`bg-black bg-opacity-30 w-[31rem] p-3`}>
				<div className='mb-4'>
					<label htmlFor='amount' className='block text-gray-700 mb-2'>
						Amount
					</label>
					<input
						type='number'
						id='amount'
						value={amount}
						onChange={(e) => setAmount(parseFloat(e.target.value))}
						className='w-full p-2 border border-gray-300 rounded-lg'
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
						className='w-full p-2 border border-gray-300 rounded-lg'
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
						className='w-full p-2 border border-gray-300 rounded-lg'
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
					className='w-full py-2 px-4 bg-blue-500 text-white rounded-lg flex items-center justify-center'
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
					<p className='mt-4 text-center'>
						{amount} {baseCurrency} = {conversionResult.toFixed(2)} {targetCurrency}
					</p>
				)}
			</div>
		</div>
	);
};

export default CurrencyConverter;
