import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { ClipLoader } from "react-spinners"; // Import the spinner

const SendEmail = () => {
	const [email, setEmail] = useState( "" );
	const [subject, setSubject] = useState( "" );
	const [message, setMessage] = useState( "" );
	const [showSuccess, setShowSuccess] = useState( false );
	const [showError, setShowError] = useState( false );
	const [loading, setLoading] = useState( false ); // State to manage loading status
	const [sentMails, setSentMails] = useState<
		{ email: string; subject: string; message: string; time: string; date: string; }[] | []
	>( [] );

	useEffect( () => {
		const savedMails = localStorage.getItem( "sentMails" );
		try {
			if ( savedMails ) {
				setSentMails( JSON.parse( savedMails ) );
			}
		} catch ( error ) {
			console.error( "Error parsing sentMails from localStorage", error );
		}
	}, [] );

	useEffect( () => {
		localStorage.setItem( "sentMails", JSON.stringify( sentMails ) );
	}, [sentMails] );

	const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
		e.preventDefault();
		setLoading( true ); // Set loading to true when the submit starts

		try {
			const response = await axios.post(
				"https://lee-man-online-banking.onrender.com/api/send-notification",
				{
					email,
					subject,
					message,
				}
			);
			console.log( response.data );

			const newMail = {
				email: email,
				subject: subject,
				message: message,
				date: new Date().toDateString(),
				time: new Date().toLocaleTimeString(),
			};

			setSentMails( ( prev ) => {
				const updatedMails = [...prev, newMail];
				localStorage.setItem( "sentMails", JSON.stringify( updatedMails ) ); // Save immediately after updating state
				return updatedMails;
			} );

			setShowSuccess( true );
			setShowError( false );
			setEmail( "" );
			setSubject( "" );
			setMessage( "" );
		} catch ( error ) {
			console.error( error );
			setShowError( true );
			setShowSuccess( false );
		} finally {
			setLoading( false ); // Set loading to false when the submit ends
		}
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-white'>
			<h1 className='text-3xl font-bold text-red-500 mb-8'>Send Email</h1>
			{ showSuccess && (
				<div
					className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4'
					role='alert'
				>
					Email sent successfully!
				</div>
			) }
			{ showError && (
				<div
					className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'
					role='alert'
				>
					Failed to send email. Please try again.
				</div>
			) }
			<form onSubmit={ handleSubmit } className='w-full max-w-md'>
				<div className='mb-4'>
					<label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
						Email
					</label>
					<input
						type='email'
						id='email'
						value={ email }
						onChange={ ( e ) => setEmail( e.target.value ) }
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
						value={ subject }
						onChange={ ( e ) => setSubject( e.target.value ) }
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
						value={ message }
						onChange={ ( e ) => setMessage( e.target.value ) }
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						rows={ 5 }
						placeholder='Enter your message here'
						required
					/>
				</div>
				<button
					type='submit'
					className='flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					disabled={ loading } // Disable the button while loading
				>
					{ loading ? (
						<ClipLoader size={ 20 } color={ "#ffffff" } />
					) : (
						<>
							<MdEmail className='mr-2' />
							Send Email
						</>
					) }
				</button>
			</form>
		</div>
	);
};

export default SendEmail;
