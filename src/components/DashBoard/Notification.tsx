import React, { type Dispatch, type SetStateAction } from "react";

interface Notification {
	id: number;
	message: string;
	date: string;
}

interface NotificationComponentProps {
	notifications: Notification[];
	showNotification: Dispatch<SetStateAction<boolean>>;
}

const NotificationComponent: React.FC<NotificationComponentProps> = ({ showNotification, notifications }) => {
	return (
		<div
			onMouseLeave={() => showNotification(false)}
			className=' cursor-pointer absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-10'
		>
			<ul className='divide-y divide-gray-200 h-[23rem] overflow-scroll overflow-x-hidden'>
				{notifications.length > 0 ? (
					notifications.map((notification) => (
						<li key={notification.id} className='p-4 hover:bg-gray-100'>
							<p className='text-sm text-gray-800 text-wrap'>{notification.message}</p>
							<p className='text-xs text-gray-500'>{notification.date}</p>
						</li>
					))
				) : (
					<li className='p-4 text-gray-500'>No notifications</li>
				)}
			</ul>
		</div>
	);
};

export default NotificationComponent;
