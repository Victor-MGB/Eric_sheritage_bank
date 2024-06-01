import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../hooks/UseSpinner";

interface User {
	id: number;
	name: string;
	email: string;
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
				const response = await axios.get<User[]>("/api/users");
				setUsers(response.data);
			} catch (error) {
				setError("An error occurred while fetching users. Please try again later.");
			} finally {
				setIsLoading(false);
			}
		};

		fetchUsers();
	}, []);

	return (
		<div className='bg-white shadow-md rounded p-6 mt-6'>
			{isLoading && <Spinner />}
			{error && <p className='text-red-500'>{error}</p>}
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{user.name} ({user.email})
					</li>
				))}
			</ul>
		</div>
	);
};

export default ViewUsers;
