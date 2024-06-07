import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

interface AuthenticatorProps {
	token: string | null;
	children: React.ReactNode;
	authenticated: boolean;
	logOut: () => void;
}

const LogOutContext = createContext<() => void>(() => {});

/**
 * A React functional component that handles user authentication.
 *
 * @param {AuthenticatorProps} props - The props for the Authenticator component.
 * @param {string} props.token - The user's authentication token.
 * @param {React.ReactNode} props.children - The child components to render when the user is authenticated.
 * @param {boolean} props.authenticated - Indicates whether the user is authenticated.
 * @param {() => void} props.logOut - A function to log the user out.
 * @returns {React.ReactElement} - The Authenticator component.
 */
const Authenticator: React.FC<AuthenticatorProps> = ({ token, children, authenticated, logOut }) => {
	const navigate = useNavigate();
	if (!token && !authenticated) {
		alert("you are not allowed view \n this page until login ");
		setTimeout(() => navigate("/sign-in"), 2000);
		return null;
	}

	return <>{children}</>;
};

export const useLogOut = () => useContext(LogOutContext);

export default Authenticator;
