import React, { useState, useEffect } from "react";
import axios from "axios";

interface User {
	id: number;
	name: string;
	email: string;
	accountBalance: number;
}

const ManageUsers: React.FC = () => {
	const [, setUsers] = useState<User[]>([]);
	const [updatedUsers, setUpdatedUsers] = useState<User[]>([]);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			const response = await axios.get("/api/users");
			setUsers(response.data);
			setUpdatedUsers(response.data);
		} catch (error) {
			console.error("Error fetching users:", error);
		}
	};

	const handleInputChange = (id: number, field: string, value: string) => {
		setUpdatedUsers((prevUsers) =>
			prevUsers.map((user) =>
				user.id === id
					? { ...user, [field]: field === "accountBalance" ? parseFloat(value) : value }
					: user
			)
		);
	};

	const handleUpdateUsers = async () => {
		try {
			await Promise.all(
				updatedUsers.map((user) =>
					axios.put(`/api/users/${user.id}`, {
						name: user.name,
						email: user.email,
						accountBalance: user.accountBalance,
					})
				)
			);
			setUsers(updatedUsers);
			alert("Users updated successfully!");
		} catch (error) {
			console.error("Error updating users:", error);
			alert("Error updating users. Please try again.");
		}
	};

	return (
		<div>
			<h2>Manage Users</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Account Balance</th>
					</tr>
				</thead>
				<tbody>
					{updatedUsers.map((user) => (
						<tr key={user.id}>
							<td>
								<input
									type='text'
									value={user.name}
									onChange={(e) =>
										handleInputChange(user.id, "name", e.target.value)
									}
								/>
							</td>
							<td>
								<input
									type='email'
									value={user.email}
									onChange={(e) =>
										handleInputChange(user.id, "email", e.target.value)
									}
								/>
							</td>
							<td>
								<input
									type='number'
									value={user.accountBalance}
									onChange={(e) =>
										handleInputChange(user.id, "accountBalance", e.target.value)
									}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={handleUpdateUsers}>Update Users</button>
		</div>
	);
};

export default ManageUsers;
