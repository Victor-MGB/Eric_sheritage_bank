import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../hooks/UseSpinner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

export interface User {
	_id: string;
	firstName: string;
	middleName: string;
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
	accountPin: string;
	agree: boolean;
	kycStatus: string;
	balance: number;
	otp: string;
	otpExpires: string;
	accounts: {
		accountId: string;
		accountNumber: string;
		type: string;
		balance: number;
		currency: string;
		transactions: {
			transactionId: string;
			amount: number;
			type: string;
			date: string;
		}[];
		_id: string;
	}[];
	withdrawals: {
		withdrawalId: string;
		amount: number;
		date: string;
	}[];
	dateOfAccountCreation: string;
	__v: number;

	stage_1: boolean;
	stage_2: boolean;
	stage_3: boolean;
	stage_4: boolean;
	stage_5: boolean;
	stage_6: boolean;
	stage_7: boolean;
}

const ViewUsers: React.FC = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setIsLoading(true);
				setError(null);
				const response = await axios.get("https://lee-man-online-banking.onrender.com/api/users");
				setUsers(response.data.users);
				console.log(response.data.users);
			} catch (error) {
				setError("An error occurred while fetching users. Please try again later.");
			} finally {
				setIsLoading(false);
			}
		};

		fetchUsers();
	}, []);

	const renderArrowPrev = (onClickHandler: () => void, hasPrev: boolean, label: string) =>
		hasPrev && (
			<button
				type='button'
				onClick={onClickHandler}
				className='absolute top-1/2 transform -translate-y-1/2 left-2 bg-gray-600 text-white p-2 rounded-full shadow-md hover:bg-gray-800 focus:outline-none'
				title={label}
			>
				Previous
			</button>
		);

	const renderArrowNext = (onClickHandler: () => void, hasNext: boolean, label: string) =>
		hasNext && (
			<button
				type='button'
				onClick={onClickHandler}
				className='absolute top-1/2 right-2 transform -translate-y-1/2  bg-gray-600 text-white p-2 rounded-full shadow-md hover:bg-gray-800 focus:outline-none'
				title={label}
			>
				Next
			</button>
		);

	return (
		<>
			{isLoading && <Spinner />}
			{error && <p className='text-red-500'>{error}</p>}
			{users.length > 0 && (
				<div className='p-4 bg-white m-auto max-w-[100vw]'>
					<Carousel
						showArrows={true}
						infiniteLoop={true}
						showThumbs={false}
						showStatus={false}
						autoPlay={false}
						emulateTouch={true}
						renderArrowPrev={renderArrowPrev}
						renderArrowNext={renderArrowNext}
					>
						{users.map((user) => (
							<div
								key={user._id}
								className='p-2 border border-gray-200 rounded-lg shadow-md bg-white mx-0 w-full items-center hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row justify-between overflow-auto'
							>
								<div className='mb-4 md:mb-0'>
									<h3 className='text-lg font-bold mb-2'>
										{user.firstName} {user.middleName} {user.lastName}
									</h3>
									<p className='text-sm text-gray-600 mb-1'>Email: {user.email}</p>
									<p className='text-sm text-gray-600 mb-1'>
										Phone: {user.phoneNumber}
									</p>
									<p className='text-sm text-gray-600 mb-1'>
										Gender: {user.gender}
									</p>
									<p className='text-sm text-gray-600 mb-1'>
										Date of Birth:{" "}
										{new Date(user.dateOfBirth).toLocaleDateString()}
									</p>
									<p className='text-sm text-gray-600 mb-1'>
										Account Type: {user.accountType}
									</p>
									<p className='text-sm text-gray-600 mb-1'>
										Address: {user.address}
									</p>
									<p className='text-sm text-gray-600 mb-1'>
										Postal Code: {user.postalCode}
									</p>
									<p className='text-sm text-gray-600 mb-1'>State: {user.state}</p>
									<p className='text-sm text-gray-600 mb-1'>
										Country: {user.country}
									</p>
									<p className='text-sm text-gray-600 mb-1'>
										Balance: {user.balance}
									</p>
								</div>

								<div className='mt-4 self-start'>
									<h4 className='text-md font-semibold mb-2'>Accounts</h4>
									<ul className='space-y-2'>
										{user.accounts.map((account) => (
											<li
												key={account.accountId}
												className='text-sm text-gray-700'
											>
												<p>Account Number: {account.accountNumber}</p>
												<p>Type: {account.type}</p>
												<p>Balance: {account.balance}</p>
												<p>Currency: {account.currency}</p>
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</Carousel>
				</div>
			)}
		</>
	);
};

export default ViewUsers;
