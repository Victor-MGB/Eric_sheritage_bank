import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../hooks/UseSpinner";

interface FormInputs {
	firstName: string;
	middleName?: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	gender: string;
	dateOfBirth: string;
	accountType: string;
	address: string;
	postalCode: string;
	state: string;
	country: string;
	currency: string;
	password: string;
	confirmPassword: string;
	accountPin: string;
	agree: boolean;
}

interface FormErrors {
	firstName?: string;
	middleName?: string;
	lastName?: string;
	email?: string;
	phoneNumber?: string;
	gender?: string;
	dateOfBirth?: string;
	accountType?: string;
	address?: string;
	postalCode?: string;
	state?: string;
	country?: string;
	currency?: string;
	password?: string;
	confirmPassword?: string;
	accountPin?: string;
	agree?: string;
}

const SignUpForm: React.FC = () => {
	const [formData, setFormData] = useState<FormInputs>({
		firstName: "",
		middleName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		gender: "",
		dateOfBirth: "",
		accountType: "",
		address: "",
		postalCode: "",
		state: "",
		country: "",
		currency: "",
		password: "",
		confirmPassword: "",
		accountPin: "",
		agree: false,
	});
	const [loading, setLoading] = useState(false);

	const [errors, setErrors] = useState<FormErrors>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const validateForm = () => {
		let valid = true;
		let newErrors: FormErrors = {};

		// Validate required fields
		for (const [key, value] of Object.entries(formData)) {
			if (!value && key !== "middleName") {
				newErrors[key as keyof FormErrors] = "This field is required";
				valid = false;
			}
		}

		// Additional validation rules
		if (formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
			newErrors.email = "Invalid email address";
			valid = false;
		}

		if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
			valid = false;
		}

		if (formData.password && formData.password.length < 8) {
			newErrors.password = "Password must be at least 8 characters";
			valid = false;
		}

		setErrors(newErrors);
		return valid;
	};

	const navigateToOTP = useNavigate();
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		setLoading(true);
		e.preventDefault();
		if (validateForm()) {
			console.log(formData);
			axios.post("https://lee-man-online-banking.onrender.com/register", { formData })
				.then((response) => {
					setLoading(false);
					console.log(response);
					if (response.status === 201) {
						navigateToOTP("/OTP");
					}
				})
				.catch((err) => {
					console.log(err.message);
					setLoading(false);
				});
		}
	};

	return (
		<div className='flex justify-center items-center min-h-screen bg-white p-7'>
			<form onSubmit={handleSubmit} className='bg-white p-8 rounded shadow-md w-full max-w-4xl'>
				<h2 className='text-2xl font-bold mb-6 text-red-600'>Enroll for a new account now</h2>
				<div className='grid grid-cols-2 gap-6'>
					{[
						{ label: "First Name", name: "firstName", type: "text" },
						{ label: "Middle Name", name: "middleName", type: "text" },
						{ label: "Last Name", name: "lastName", type: "text" },
						{ label: "Email", name: "email", type: "email" },
						{ label: "Phone Number", name: "phoneNumber", type: "text" },
						{ label: "Gender", name: "gender", type: "text" },
						{ label: "Date of Birth", name: "dateOfBirth", type: "date" },
						{ label: "Account Type", name: "accountType", type: "text" },
						{ label: "Address", name: "address", type: "text" },
						{ label: "Postal Code", name: "postalCode", type: "text" },
						{ label: "State", name: "state", type: "text" },
						{ label: "Country", name: "country", type: "text" },
						{ label: "Currency", name: "currency", type: "text" },
						{ label: "Password", name: "password", type: "password" },
						{ label: "Confirm Password", name: "confirmPassword", type: "password" },
						{ label: "Account PIN", name: "accountPin", type: "password" },
					].map((input) => (
						<div key={input.name} className='relative z-0 mb-6 w-full group'>
							<input
								name={input.name}
								type={input.type}
								value={formData[input.name as keyof FormInputs] as string}
								onChange={handleChange}
								className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer'
								placeholder=' '
							/>
							<label
								htmlFor={input.name}
								className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
							>
								{input.label}
							</label>
							{errors[input.name as keyof FormErrors] && (
								<p className='mt-2 text-sm text-red-600'>
									{errors[input.name as keyof FormErrors]}
								</p>
							)}
						</div>
					))}
				</div>
				<div className='flex items-center mb-6'>
					<input
						name='agree'
						type='checkbox'
						checked={formData.agree}
						onChange={handleChange}
						className='w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500'
					/>
					<label htmlFor='agree' className='ml-2 text-sm font-medium text-gray-900'>
						I agree to the terms and conditions
					</label>
					{errors.agree && <p className='mt-2 text-sm text-red-600'>{errors.agree}</p>}
				</div>
				<p className='text-sm my-5 text-gray-600'>
					Already enrolled?{" "}
					<Link to={"/sign-in"} className='text-red-500 underline cursor-pointer'>
						Sign in
					</Link>
				</p>
				<button
					type='submit'
					className='w-full bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
				>
					Sign Up
				</button>
				{loading && <Spinner />}
			</form>
		</div>
	);
};

export default SignUpForm;
