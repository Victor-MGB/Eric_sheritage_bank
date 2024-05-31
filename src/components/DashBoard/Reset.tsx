import React, { useState } from "react";
import axios from "axios";

const ResetPasswordForm = () => {
	const [email, setEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({ email: "", newPassword: "", confirmPassword: "" });

	const validate = () => {
		let valid = true;
		let errors = { email: "", newPassword: "", confirmPassword: "" };

		if (!email) {
			errors.email = "Email is required";
			valid = false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			errors.email = "Invalid email";
			valid = false;
		}

		if (!newPassword) {
			errors.newPassword = "New password is required";
			valid = false;
		} else if (newPassword.length < 6) {
			errors.newPassword = "Password must be at least 6 characters";
			valid = false;
		}

		if (!confirmPassword) {
			errors.confirmPassword = "Confirm password is required";
			valid = false;
		} else if (confirmPassword !== newPassword) {
			errors.confirmPassword = "Passwords must match";
			valid = false;
		}

		setErrors(errors);
		return valid;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validate()) return;

		try {
			await axios.post("/api/reset-password", { email, newPassword });
			alert("Password reset successful!");
		} catch (error) {
			console.error("Error resetting password:", error);
			alert("Failed to reset password. Please try again.");
		}
	};

	return (
		<div className='bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto mt-10'>
			<h2 className='text-2xl font-bold mb-6'>Reset Password</h2>
			<form onSubmit={handleSubmit}>
				<div className='mb-4'>
					<label htmlFor='email' className='block text-gray-700'>
						Email
					</label>
					<input
						id='email'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={`w-full px-4 py-2 border ${
							errors.email ? "border-red-500" : "border-gray-300"
						} rounded-lg`}
					/>
					{errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
				</div>
				<div className='mb-4'>
					<label htmlFor='newPassword' className='block text-gray-700'>
						New Password
					</label>
					<input
						id='newPassword'
						type='password'
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
						className={`w-full px-4 py-2 border ${
							errors.newPassword ? "border-red-500" : "border-gray-300"
						} rounded-lg`}
					/>
					{errors.newPassword && <p className='text-red-500 text-sm mt-1'>{errors.newPassword}</p>}
				</div>
				<div className='mb-4'>
					<label htmlFor='confirmPassword' className='block text-gray-700'>
						Confirm Password
					</label>
					<input
						id='confirmPassword'
						type='password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						className={`w-full px-4 py-2 border ${
							errors.confirmPassword ? "border-red-500" : "border-gray-300"
						} rounded-lg`}
					/>
					{errors.confirmPassword && (
						<p className='text-red-500 text-sm mt-1'>{errors.confirmPassword}</p>
					)}
				</div>
				<button
					type='submit'
					className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'
				>
					Reset Password
				</button>
			</form>
		</div>
	);
};

export default ResetPasswordForm;
