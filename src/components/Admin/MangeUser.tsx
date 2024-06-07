import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../hooks/UseSpinner";

interface Account {
	accountId: string;
	accountNumber: string;
	type: string;
	balance: number;
	currency: string;
}

interface User {
	firstName: string;
	middleName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	gender: string;
	accountType: string;
	address: string;
	postalCode: string;
	state: string;
	country: string;
	currency: string;
	accountPin: string;
	balance: number;
	accounts: Account[];
}

const UserList: React.FC = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [editBalance, setEditBalance] = useState<{ [key: string]: number }>({});
	const [loading, setLoading] = useState<boolean>(false);
	const [message, setMessage] = useState<string | null>(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setLoading(true);
				const response = await axios.get("https://lee-man-online-banking.onrender.com/api/users");
				setUsers(response.data.users);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching users:", error);
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	const handleEditBalanceChange = (accountNumber: string, balance: number) => {
		setEditBalance((prev) => ({ ...prev, [accountNumber]: balance }));
	};

	const handleSubmitBalance = async (accountNumber: string) => {
		try {
			setLoading(true);
			const newBalance = editBalance[accountNumber];

			if (newBalance !== undefined) {
				await axios.post(
					"https://lee-man-online-banking.onrender.com/api/update-balance",
					JSON.stringify({
						accountNumber,
						amountToAdd: newBalance,
					}),
					{
						headers: {
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": "*",
							"Access-Control-Allow-Methods": "POST",
						},
					}
				);

				// Update the user's balance in the state
				setUsers((prevUsers) =>
					prevUsers.map((user) => ({
						...user,
						accounts: user.accounts.map((account) =>
							account.accountNumber === accountNumber
								? { ...account, balance: newBalance }
								: account
						),
					}))
				);

				setLoading(false);
				setMessage("Balance updated successfully.");
				setTimeout(() => setMessage(null), 3000);
			}
		} catch (error) {
			console.error("Error updating balance:", error);
			setLoading(false);
			setMessage("Error updating balance.");
			setTimeout(() => setMessage(null), 3000);
		}
	};

	return (
		<div className='container mx-auto p-4'>
			<h2 className='text-2xl font-bold mb-4'>User List</h2>
			{loading && <Spinner />}
			{message && (
				<div
					className={`p-2 mb-4 ${
						message.includes("Error") ? "bg-red-500" : "bg-green-500"
					} text-white`}
				>
					{message}
				</div>
			)}
			<ul className='space-y-4'>
				{users.map((user, index) => (
					<li key={index} className='p-4 bg-white shadow rounded-lg'>
						<div className='mb-2'>
							<strong>Name:</strong> {user.firstName} {user.lastName}
						</div>
						<div className='mb-2'>
							<strong>Email:</strong> {user.email}
						</div>
						<div className='mb-2'>
							<strong>Account Number:</strong> {user.accounts[0].accountNumber}
						</div>
						<div className='mb-2'>
							<strong>Balance:</strong> ${user.accounts[0].balance}
						</div>
						<div className='mb-2'>
							<strong>Phone Number:</strong> {user.phoneNumber}
						</div>
						<div className='mb-2'>
							<strong>Account Type:</strong> {user.accountType}
						</div>
						<div className='flex items-center'>
							<input
								type='number'
								placeholder='Enter new balance'
								value={editBalance[user.accounts[0].accountNumber] ?? ""}
								onChange={(e) =>
									handleEditBalanceChange(
										user.accounts[0].accountNumber,
										parseFloat(e.target.value)
									)
								}
								className='mr-2 p-2 border rounded'
							/>
							<button
								onClick={() => handleSubmitBalance(user.accounts[0].accountNumber)}
								className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
							>
								Update Balance
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
