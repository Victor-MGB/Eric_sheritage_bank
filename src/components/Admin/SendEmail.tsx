import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";

const SendEmail = () => {
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [showSuccess, setShowSuccess] = useState(false);
	const [showError, setShowError] = useState(false);
	const [sentMails, setsentMails] = useState<
		| {
				Email: string;
				subject: string;
				message: string;
				time: string;
				date: string;
		  }[]
		| []
	>();

	useEffect(() => {
		localStorage.setItem("sentMails", JSON.stringify(sentMails));
	}, [sentMails]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Add logic to send email here
		console.log("Email:", email, "Subject:", subject, "Message:", message);

		//save to localstorage
		setsentMails((prev) => {
			const oldData = prev ? [...prev] : [];
			oldData.push({
				Email: email,
				subject: subject,
				message: message,
				date: new Date().toDateString(),
				time: new Date().toLocaleTimeString(),
			});
			return oldData;
		});

		// Simulate email sending success or failure
		const success = Math.random() > 0.5;
		if (success) {
			setShowSuccess(true);
			setShowError(false);
		} else {
			setShowSuccess(false);
			setShowError(true);
		}
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-white'>
			<h1 className='text-3xl font-bold text-red-500 mb-8'>Send Email</h1>
			{showSuccess && (
				<div
					className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4'
					role='alert'
				>
					Email sent successfully!
				</div>
			)}
			{showError && (
				<div
					className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'
					role='alert'
				>
					Failed to send email. Please try again.
				</div>
			)}
			<form onSubmit={handleSubmit} className='w-full max-w-md'>
				<div className='mb-4'>
					<label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
						Email
					</label>
					<input
						type='email'
						id='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						placeholder='Enter user email address'
						required
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='subject' className='block text-gray-700 font-bold mb-2'>
						Subject
					</label>
					<input
						type='text'
						id='subject'
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						placeholder='Enter the subject of your message'
						required
					/>
				</div>
				<div className='mb-6'>
					<label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
						Message
					</label>
					<textarea
						id='message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						rows={5}
						placeholder='Enter your message here'
						required
					/>
				</div>
				<button
					type='submit'
					className='flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
				>
					<MdEmail className='mr-2' />
					Send Email
				</button>
			</form>
		</div>
	);
};

export default SendEmail;
