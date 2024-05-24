import React, { useState } from "react";

interface LoginFormInputs {
	accountNumber: string;
	password: string;
}

interface LoginFormErrors {
	accountNumber?: string;
	password?: string;
}

const LoginForm: React.FC = () => {
	const [formData, setFormData] = useState<LoginFormInputs>({
		accountNumber: "",
		password: "",
	});

	const [errors, setErrors] = useState<LoginFormErrors>({});

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
			console.log(formData);
		}
	};

	return (
		<div
			className='flex justify-center items-center min-h-screen bg-gray-100 bg-cover bg-center bg-no-repeat'
			style={{ backgroundImage: "url(/assets/images/login.jpg)" }}
		>
			<form onSubmit={handleSubmit} className='bg-opacity-50 p-8 rounded shadow-md w-[40rem] bg-black o'>
				<h2 className='text-2xl font-bold mb-6 orbitron'>Login to have more power on your money</h2>
				<div className='relative z-0 mb-6 w-full group'>
					<input
						name='accountNumber'
						type='text'
						value={formData.accountNumber}
						onChange={handleChange}
						className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
					/>
					<label
						htmlFor='accountNumber'
						className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
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
						className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
					/>
					<label
						htmlFor='password'
						className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
					>
						Password
					</label>
					{errors.password && <p className='mt-2 text-sm text-red-600'>{errors.password}</p>}
				</div>
				<button
					type='submit'
					className='w-full bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
