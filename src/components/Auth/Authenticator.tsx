import React from "react";
import { useNavigate } from "react-router-dom";

interface AuthenticatorProps {
	token: string | null;
	children: React.ReactNode;
	authenticated: boolean;
}

const Authenticator: React.FC<AuthenticatorProps> = ({ token, children, authenticated }) => {
	const navigate = useNavigate();
	if (!token && !authenticated) {
		alert("you are not allowed view this page \n ");
		setTimeout(() => navigate("/sign-in"), 2000);
		return null;
	}

	return <>{children}</>;
};

export default Authenticator;
