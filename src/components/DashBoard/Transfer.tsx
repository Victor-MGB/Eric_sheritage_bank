import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TransferToMyAccounts: React.FC = () => {
	const [formData, setFormData] = useState({
		amount: "",
		fromAccount: "",
		toAccount: "",
	});
	const [isSuccessful, setisSuccessful] = useState(false);
	const [isFailed, setisFailed] = useState(false);
	const [error, setError] = useState("");
	const mainAccountBalance = 1000; // Assuming this is the main account balance

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setError(""); // Clear error when input changes
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { amount, fromAccount, toAccount } = formData;

		// Input validation
		if (!amount || !fromAccount || !toAccount) {
			setError("Please fill in all fields.");
			return;
		}

		const numericAmount = parseFloat(amount);
		if (isNaN(numericAmount) || numericAmount <= 0) {
			setError("Please enter a valid positive amount.");
			return;
		}

		if (numericAmount > mainAccountBalance) {
			setError("Insufficient balance in the main account.");
			return;
		}

		// else Proceed with transfer
		axios.post("mbjkbkj", {
			data: formData,
		})
			.then((response) => {
				// on successful response here
				if (response.status === 200) {
					setisSuccessful(true);
					return;
				}
				setisFailed(true);
			})
			.catch((error) => {
				if (error) {
					setisSuccessful(false);
					setisFailed(true);
				}
			});
		setFormData({ amount: "", fromAccount: "", toAccount: "" });
	};

	return (
		<div className='flex justify-center items-center min-h-screen bg-gray-100'>
			<form
				onSubmit={handleSubmit}
				className='bg-red-600 bg-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-4xl'
			>
				<h2 className='text-2xl font-bold mb-6 text-white'>Transfer to My Accounts</h2>
				{error && <p className='text-red-500 mb-4'>{error}</p>}
				<div className='grid grid-cols-2 gap-4'>
					<div className='mb-4'>
						<label htmlFor='amount' className='block text-white'>
							Amount
						</label>
						<input
							type='number'
							id='amount'
							name='amount'
							value={formData.amount}
							onChange={handleChange}
							className='mt-1 block w-full p-2 rounded-md bg-white text-gray-900'
							required
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='fromAccount' className='block text-white'>
							From Account
						</label>
						<select
							id='fromAccount'
							name='fromAccount'
							value={formData.fromAccount}
							onChange={handleChange}
							className='mt-1 block w-full p-2 rounded-md bg-white text-gray-900'
							required
						>
							<option value=''>Select Account</option>
							{/* Add account options */}
						</select>
					</div>
					<div className='mb-4'>
						<label htmlFor='toAccount' className='block text-white'>
							To Account
						</label>
						<select
							id='toAccount'
							name='toAccount'
							value={formData.toAccount}
							onChange={handleChange}
							className='mt-1 block w-full p-2 rounded-md bg-white text-gray-900'
							required
						>
							<option value=''>Select Account</option>
							{/* Add account options */}
						</select>
					</div>
				</div>
				<button type='submit' className='w-full bg-white text-red-600 py-2 px-4 rounded-md font-bold'>
					Transfer
				</button>
			</form>
			{isSuccessful && <SuccessTransfer route={"/"} />}
			{isFailed && <FailedTransferToMyAccounts route={"/"} />}
		</div>
	);
};

const TransferToOtherBanks: React.FC = () => {
	const [formData, setFormData] = useState({
		amount: "",
		fromAccount: "",
		toBank: "",
		toAccountNumber: "",
		recipientName: "",
	});
	const [isSuccessful, setisSuccessful] = useState(false);
	const [isFailed, setisFailed] = useState(false);
	const [error, setError] = useState("");
	const mainAccountBalance = 1000; // Assuming this is the main account balance

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setError(""); // Clear error when input changes
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { amount, fromAccount, toBank, toAccountNumber, recipientName } = formData;

		// Input validation
		if (!amount || !fromAccount || !toBank || !toAccountNumber || !recipientName) {
			setError("Please fill in all fields.");
			return;
		}

		const numericAmount = parseFloat(amount);
		if (isNaN(numericAmount) || numericAmount <= 0) {
			setError("Please enter a valid positive amount.");
			return;
		}

		if (numericAmount > mainAccountBalance) {
			setError("Insufficient balance in the main account.");
			return;
		}

		// else Proceed with transfer
		axios.post("mbjkbkj", {
			data: formData,
		})
			.then((response) => {
				// on successful response here
				if (response.status === 200) {
					setisSuccessful(true);
					return;
				}
				setisFailed(true);
			})
			.catch((error) => {
				if (error) {
					setisSuccessful(false);
					setisFailed(true);
				}
			});
		setFormData({ amount: "", fromAccount: "", toBank: "", toAccountNumber: "", recipientName: "" });
	};

	return (
		<div className='flex justify-center items-center min-h-screen bg-gray-100'>
			<form
				onSubmit={handleSubmit}
				className='bg-red-600 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-4xl w-full'
			>
				<h2 className='text-2xl font-bold mb-6 text-white'>Transfer to Other Banks</h2>
				{error && <p className='text-red-500 mb-4'>{error}</p>}
				<div className='grid grid-cols-2 gap-6'>
					<div className='mb-4'>
						<label htmlFor='amount' className='block text-white'>
							Amount
						</label>
						<input
							type='number'
							id='amount'
							name='amount'
							value={formData.amount}
							onChange={handleChange}
							className='mt-1 block w-full p-2 rounded-md bg-white text-gray-900'
							required
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='fromAccount' className='block text-white'>
							From Account
						</label>
						<select
							id='fromAccount'
							name='fromAccount'
							value={formData.fromAccount}
							onChange={handleChange}
							className='mt-1 block w-full p-2 rounded-md bg-white text-gray-900'
							required
						>
							<option value=''>Select Account</option>
							{/* Add account options */}
						</select>
					</div>
					<div className='mb-4'>
						<label htmlFor='toBank' className='block text-white'>
							To Bank
						</label>
						<select
							id='toBank'
							name='toBank'
							value={formData.toBank}
							onChange={handleChange}
							className='mt-1 block w-full p-2 rounded-md bg-white text-gray-900'
							required
						>
							<option value=''>Select Bank</option>
							{/* Add bank options */}
						</select>
					</div>
					<div className='mb-4'>
						<label htmlFor='toAccountNumber' className='block text-white'>
							Account Number
						</label>
						<input
							type='text'
							id='toAccountNumber'
							name='toAccountNumber'
							value={formData.toAccountNumber}
							onChange={handleChange}
							className='mt-1 block w-full p-2 rounded-md bg-white text-gray-900'
							required
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='recipientName' className='block text-white'>
							Recipient Name
						</label>
						<input
							type='text'
							id='recipientName'
							name='recipientName'
							value={formData.recipientName}
							onChange={handleChange}
							className='mt-1 block w-full p-2 rounded-md bg-white text-gray-900'
							required
						/>
					</div>
				</div>
				<button
					type='submit'
					className='w-full bg-white text-red-600 py-2 px-4 rounded-md font-bold mt-4'
				>
					Transfer
				</button>
			</form>
			{isSuccessful && <SuccessTransfer route={"/"} />}
			{isFailed && <FailedTransferToMyAccounts route={"/"} />}
		</div>
	);
};

const InternationalTransfer: React.FC = () => {
	const [formData, setFormData] = useState({
		amount: "",
		fromAccount: "",
		toBank: "",
		toAccountNumber: "",
		recipientName: "",
		country: "",
	});
	const [isSuccessful, setisSuccessful] = useState(false);
	const [isFailed, setisFailed] = useState(false);
	const [error, setError] = useState("");
	const mainAccountBalance = 1000; // Assuming this is the main account balance

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setError(""); // Clear error when input changes
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { amount, fromAccount, toBank, toAccountNumber, recipientName, country } = formData;

		// Input validation
		if (!amount || !fromAccount || !toBank || !toAccountNumber || !recipientName || !country) {
			setError("Please fill in all fields.");
			return;
		}

		const numericAmount = parseFloat(amount);
		if (isNaN(numericAmount) || numericAmount <= 0) {
			setError("Please enter a valid positive amount.");
			return;
		}

		if (numericAmount > mainAccountBalance) {
			setError("Insufficient balance in the main account.");
			return;
		}

		// else Proceed with transfer
		axios.post("mbjkbkj", {
			data: formData,
		})
			.then((response) => {
				// on successful response here
				if (response.status === 200) {
					setisSuccessful(true);
					return;
				}
				setisFailed(true);
			})
			.catch((error) => {
				if (error) {
					setisSuccessful(false);
					setisFailed(true);
				}
			});
		setFormData({
			amount: "",
			fromAccount: "",
			toBank: "",
			toAccountNumber: "",
			recipientName: "",
			country: "",
		});
	};

	return (
		<div className='flex justify-center items-center min-h-screen bg-gray-100'>
			<form
				onSubmit={handleSubmit}
				className='bg-red-600 bg-opacity-50 p-8 rounded-lg shadow-lg max-w-4xl w-full'
			>
				<h2 className='text-2xl font-bold mb-6 text-white'>International Transfer</h2>
				{error && <p className='text-red-500 mb-4'>{error}</p>}
				<div className='grid grid-cols-2 gap-6'>
					<div className='mb-4'>
						<label htmlFor='amount' className='block text-white'>
							Amount
						</label>
						<input
							type='number'
							id='amount'
							name='amount'
							value={formData.amount}
							onChange={handleChange}
							className='mt-1 block w-full p-2 rounded-md bg-white text-gray-900'
							required
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='fromAccount' className='block text-white'>
							From Account
						</label>
						<select
							id='fromAccount'
							name='fromAccount'
							value={formData.fromAccount}
							onChange={handleChange}
							className='mt-1 block w-full p-2 rounded-md bg-white text-gray-900'
							required
						>
							<option value=''>Select Account</option>
							{/* Add account options */}
						</select>
					</div>
					<div className='mb-4'>
						<label htmlFor='toBank' className='block text-white'>
							To Bank
						</label>
						<select
							id='toBank'
							name='toBank'
							value={formData.toBank}
							onChange={handleChange}
							className='mt-1 block w-full p-2 rounded-md bg-white text-gray-900'
							required
						>
							<option value=''>Select Bank</option>
							{/* Add bank options */}
						</select>
					</div>
					<div className='mb-4'>
						<label htmlFor='toAccountNumber' className='block text-white'>
							Account Number
						</label>
						<input
							type='text'
							id='toAccountNumber'
							name='toAccountNumber'
							value={formData.toAccountNumber}
							onChange={handleChange}
							className='mt-1 block w-full p-2 rounded-md bg-white text-gray-900'
							required
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='recipientName' className='block text-white'>
							Recipient Name
						</label>
						<input
							type='text'
							id='recipientName'
							name='recipientName'
							value={formData.recipientName}
							onChange={handleChange}
							className='mt-1 block w-full p-2 rounded-md bg-white text-gray-900'
							required
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='country' className='block text-white'>
							Country
						</label>
						<input
							type='text'
							id='country'
							name='country'
							value={formData.country}
							onChange={handleChange}
							className='mt-1 block w-full p-2 rounded-md bg-white text-gray-900'
							required
						/>
					</div>
				</div>
				<button
					type='submit'
					className='w-full bg-white text-red-600 py-2 px-4 rounded-md font-bold mt-4'
				>
					Transfer
				</button>
			</form>
			{isSuccessful && <SuccessTransfer route={"/"} />}
			{isFailed && <FailedTransferToMyAccounts route={"/"} />}
		</div>
	);
};

export { TransferToMyAccounts, TransferToOtherBanks, InternationalTransfer };
//
//
// 
//
//succesful and failed pages for each transfer component
const SuccessTransfer: React.FC<{ route: string }> = ({ route }) => {
	const navigate = useNavigate();

	return (
		<div className='flex justify-center items-center min-h-screen bg-gray-100'>
			<div className='bg-red-600 bg-opacity-50 p-8 rounded-lg shadow-lg max-w-4xl w-full text-center'>
				<h2 className='text-2xl font-bold mb-6 text-white'>Transfer Successful</h2>
				<p className='text-white mb-6'>
					Your transfer has been completed successfully. The details have been sent to your email.
				</p>
				<button
					onClick={() => navigate("route")}
					className='bg-white text-red-600 py-2 px-4 rounded-md font-bold'
				>
					Return to Home
				</button>
			</div>
		</div>
	);
};

const FailedTransferToMyAccounts: React.FC<{ route: string; message?: string; reason?: string }> = ({
	route,
	message,
	reason,
}) => {
	const navigate = useNavigate();

	return (
		<div className='flex justify-center items-center min-h-screen bg-gray-100'>
			<div className='bg-red-600 bg-opacity-50 p-8 rounded-lg shadow-lg max-w-4xl w-full text-center'>
				<h2 className='text-2xl font-bold mb-6 text-white'>{message ? message : "Transfer Failed"}</h2>
				<p className='text-white mb-6'>
					{reason ? reason : "There was an issue processing your transfer. Please try again later."}
				</p>
				<button
					onClick={() => navigate(route)}
					className='bg-white text-red-600 py-2 px-4 rounded-md font-bold'
				>
					Retry Transfer
				</button>
			</div>
		</div>
	);
};
export default SuccessTransfer;
