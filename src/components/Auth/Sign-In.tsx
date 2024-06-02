import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface LoginFormInputs {
	accountNumber: string;
	password: string;
}

interface LoginFormErrors {
	accountNumber?: string;
	password?: string;
}

const LoginForm: React.FC<{
	extractUserDetails: (userDetails: {
		firstName: string;
		lastName: string;
		email: string;
		phoneNumber: string;
		password: string;
	}) => void;
}> = ({ extractUserDetails }) => {
	const [formData, setFormData] = useState<LoginFormInputs>({
		accountNumber: "",
		password: "",
	});

	const [errors, setErrors] = useState<LoginFormErrors>({});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const validateForm = () => {
		let valid = true;
		let newErrors: LoginFormErrors = {};

		// Validate required fields
		if (!formData.accountNumber) {
			newErrors.accountNumber = "This field is required";
			valid = false;
		}

		if (!formData.password) {
			newErrors.password = "This field is required";
			valid = false;
		} else if (formData.password.length < 8) {
			newErrors.password = "Password must be at least 8 characters";
			valid = false;
		}

		setErrors(newErrors);
		return valid;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (validateForm()) {
			setIsLoading(true);
			const data = JSON.stringify(formData);
			console.log(data);
			axios.post("https://lee-man-online-banking.onrender.com/api/login", data, {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			})
				.then((response) => {
					if (response.status === 200) {
						setIsSuccess(true);
						const userData = response.data.user;

						//make the user data accessable by other components.
						extractUserDetails(userData);
						const token = response.data.token;
						sessionStorage.setItem("userToken", token);
					}
				})
				.catch((err) => {
					console.log(err);
					setErrors(err.message);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	};

	return (
		<div className='flex justify-center items-center min-h-screen bg-white'>
			<form
				onSubmit={handleSubmit}
				className='bg-white p-8 rounded shadow-md w-[40rem] animate-fade-in-down'
			>
				<h2 className='text-2xl font-bold mb-6 text-red-600'>Login to have more power on your money</h2>
				<div className='relative z-0 mb-6 w-full group'>
					<input
						name='accountNumber'
						type='text'
						value={formData.accountNumber}
						onChange={handleChange}
						className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer'
						placeholder=' '
					/>
					<label
						htmlFor='accountNumber'
						className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
					>
						Account Number
					</label>
					{errors.accountNumber && (
						<p className='mt-2 text-sm text-red-600'>{errors.accountNumber}</p>
					)}
				</div>
				<div className='relative z-0 mb-6 w-full group'>
					<input
						name='password'
						type='password'
						value={formData.password}
						onChange={handleChange}
						className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer'
						placeholder=' '
					/>
					<label
						htmlFor='password'
						className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
					>
						Password
					</label>
					{errors.password && <p className='mt-2 text-sm text-red-600'>{errors.password}</p>}
				</div>

				<p className='text-sm my-5 text-gray-500 capitalize'>
					already not enrolled?{" "}
					<Link
						to={"/sign-up"}
						className='text-red-600 underline cursor-pointer hover:text-red-800'
					>
						{" "}
						register
					</Link>
				</p>
				<button
					type='submit'
					className='w-full bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-pulse'
					disabled={isLoading}
				>
					{isLoading ? (
						<div className='flex items-center justify-center'>
							<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
							Loading...
						</div>
					) : (
						"Login"
					)}
				</button>
				{isSuccess && (
					<div
						className='mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative'
						role='alert'
					>
						<strong className='font-bold'>Success!</strong>
						<span className='block sm:inline'>Login successful.</span>
					</div>
				)}
			</form>
		</div>
	);
};

export default LoginForm;
