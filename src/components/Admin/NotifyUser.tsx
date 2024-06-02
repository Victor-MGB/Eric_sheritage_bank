import React, { useState } from "react";
import axios from "axios";
import Spinner from "../../hooks/UseSpinner";

const NotifyUser = () => {
	const [message, setMessage] = useState("");
	const [userId, setUserId] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");
		setSuccess(false);

		try {
			await axios.post("/api/notifications", { message, userId });
			setMessage("");
			setUserId("");
			setSuccess(true);
		} catch (err) {
			setError("Failed to send notification");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='bg-white p-6 rounded-lg shadow-md'>
			<h2 className='text-2xl font-bold text-red-600 mb-4'>Notify User</h2>
			{error && <p className='text-red-600 mb-4'>{error}</p>}
			{success && <p className='text-green-600 mb-4'>Notification sent successfully!</p>}
			<form onSubmit={handleSubmit}>
				<div className='mb-4'>
					<label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
						Message
					</label>
					<textarea
						id='message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						rows={3}
						required
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='userId' className='block text-gray-700 font-bold mb-2'>
						User ID
					</label>
					<input
						id='userId'
						type='text'
						value={userId}
						onChange={(e) => setUserId(e.target.value)}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						required
					/>
				</div>
				<button
					type='submit'
					className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					disabled={isLoading}
				>
					{isLoading ? <Spinner /> : "Send Notification"}
				</button>
			</form>
		</div>
	);
};

export default NotifyUser;
