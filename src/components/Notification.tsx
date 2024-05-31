import React from "react";

interface NotificationProps {
	message: string;
	onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
	return (
		<div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50'>
			<div className='bg-white rounded-lg shadow-lg p-6 max-w-sm w-full'>
				<h2 className='text-xl font-semibold mb-4 text-red-600'>Notification</h2>
				<p className='text-gray-700 mb-6'>{message}</p>
				<button
					onClick={onClose}
					className='w-full bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default Notification;
