import React from "react";
import { FaShieldAlt, FaQuestionCircle, FaHistory, FaKey } from "react-icons/fa";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const UserSecurity = () => {
	const navi = useNavigate();
    const location = useLocation();
    
    const OutletRoutes = [ "/dashboard/security/reset-password" ];
    
    const shouldRenderOutlet = OutletRoutes.includes( location.pathname );
    

	return (
		<div className='bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mt-10'>
			<h2 className='text-2xl font-bold mb-6'>Security Settings</h2>
			{shouldRenderOutlet ? (
				<Outlet />
			) : (
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<SecurityField
						icon={<FaKey />}
						label='Password Reset'
						description='Change your account password.'
						action='Reset Password'
						onAction={() => alert(navi("/dashboard/security/reset-password"))}
					/>
					<SecurityField
						icon={<FaShieldAlt />}
						label='Two-Factor Authentication'
						description='Add an extra layer of security to your account.'
						action='Setup 2FA'
						onAction={() => alert("2FA setup functionality goes here")}
					/>
					<SecurityField
						icon={<FaQuestionCircle />}
						label='Security Questions'
						description='Manage your security questions.'
						action='Manage Questions'
						onAction={() => alert("Security questions functionality goes here")}
					/>
					<SecurityField
						icon={<FaHistory />}
						label='Activity Logs'
						description='View recent account activity.'
						action='View Logs'
						onAction={() => alert("Activity logs functionality goes here")}
					/>
				</div>
			)}
		</div>
	);
};

const SecurityField = ({
	icon,
	label,
	description,
	action,
	onAction,
}: {
	icon: React.ReactNode;
	label: string;
	description: string;
	action: string;
	onAction: () => void;
}) => (
	<div className='flex items-center p-4 bg-gray-50 rounded-lg shadow'>
		<div className='mr-4 text-blue-500 text-2xl'>{icon}</div>
		<div className='flex-grow'>
			<h3 className='text-lg font-semibold'>{label}</h3>
			<p className='text-gray-600'>{description}</p>
		</div>
		<button onClick={onAction} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
			{action}
		</button>
	</div>
);

export default UserSecurity;
