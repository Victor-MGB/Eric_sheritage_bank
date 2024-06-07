import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchUsers = () => {
	const [userCount, setUserCount] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setIsLoading(true);
				setError(null);
				const response = await axios.get("https://lee-man-online-banking.onrender.com/api/users");
				setUserCount(response.data.users.length);
			} catch (error) {
				setError("An error occurred while fetching users. Please try again later.");
			} finally {
				setIsLoading(false);
			}
		};

		fetchUsers();
	}, []);

	return { userCount, isLoading, error };
};
