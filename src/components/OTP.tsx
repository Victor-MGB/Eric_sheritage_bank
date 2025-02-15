import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Notification from "./Notification";
import Spinner from "../hooks/UseSpinner";

const OTPPage: React.FC = () => {
	const [otp, setOtp] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [showNotification, setShowNotification] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === "otp") {
			setOtp(e.target.value);
		} else if (e.target.name === "email") {
			setEmail(e.target.value);
		}
		setError(null);
	};

	const validateOtp = (otp: string, email: string): boolean => {
		if (otp.length !== 6) {
			setError("OTP must be 6 digits.");
			return false;
		}
		if (!/^[a-zA-Z0-9]{6}$/.test(otp)) {
			setError("OTP must contain 6 alphanumeric characters.");
			return false;
		}
		if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
			setError("Invalid email address.");
			return false;
		}
		return true;
	};

	const navi = useNavigate();
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (validateOtp(otp, email)) {
			setLoading(true);
			const data = JSON.stringify({ otp, email });
			axios.post("https://lee-man-online-banking.onrender.com/api/verify-otp", data, {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			})
				.then((response) => {
					// console.log(response);
					setLoading(false);
					if (response.status === 201) {
						setShowNotification(true);
						setTimeout(() => {
							navi("/sign-in");
						}, 4000);
					}
				})
				.catch((error) => {
					setLoading(false);
					setError(`${error.message}, Please try again`);
				});
		}
	};

	const handleNotificationClose = () => {
		setShowNotification(false);
		navigate("/sign-in"); // Redirect to the login after closing the notification
	};

	return (
		<div className='flex justify-center items-center min-h-screen bg-white p-7'>
			<div className='bg-white p-8 rounded shadow-md w-full max-w-md text-center'>
				<h2 className='text-3xl font-bold mb-4 text-yellow-600'>Verify OTP</h2>
				<p className='mb-6 text-gray-600'>
					Please enter the OTP sent to your registered email to complete your registration.
				</p>
				<form onSubmit={handleSubmit}>
					<div className='mb-6'>
						<input
							type='text'
							name='email'
							value={email}
							onChange={handleChange}
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer'
							placeholder='Enter Email'
						/>
					</div>
					<div className='mb-6'>
						<input
							type='text'
							name='otp'
							value={otp}
							onChange={handleChange}
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer'
							placeholder='Enter OTP'
						/>
					</div>
					{error && <p className='mb-4 text-sm text-red-600'>{error}</p>}
					<button
						type='submit'
						className='w-full bg-yellow-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					>
						Verify OTP
					</button>
					{loading && <Spinner />}
				</form>
			</div>
			{showNotification && (
				<Notification
					message='Your login details have been sent to your email. Please check your inbox.'
					onClose={handleNotificationClose}
				/>
			)}
		</div>
	);
};

export default OTPPage;
