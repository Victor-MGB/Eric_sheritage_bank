import React from "react";
import ViewUsers from "./Users";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

interface SentMail {
	Email: string;
	subject: string;
	message: string;
	time: string;
	date: string;
}

const MainContent: React.FC = () => {
	const location = useLocation();
	const isOutletRoutes = ["/admin/users", "/admin/notify-user", "/admin/send-email"].includes(location.pathname);

	const sentMails = localStorage.getItem("sentmails");
	const parsedData: SentMail[] = sentMails ? JSON.parse(sentMails) : [];

	return (
		<>
			{isOutletRoutes ? (
				<Outlet />
			) : (
				<div className='flex-grow p-6 bg-gray-100'>
					<h1 className='text-2xl font-bold mb-6'>Welcome to the Admin Dashboard</h1>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='bg-white shadow-md rounded p-6'>
							<h2 className='text-xl font-semibold mb-4 text-red-600'>Active Users</h2>
							<p>This section displays the number of active users.</p>
						</div>
						<div className='bg-white shadow-md rounded p-6'>
							<h2 className='text-xl font-semibold mb-4 text-red-600'>Messages Sent</h2>
							<p>This section displays the number of messages sent to users.</p>
							<p>Total mails sent: {parsedData.length > 0 && parsedData.length}</p>
						</div>
						<div className='bg-white shadow-md rounded p-6'>
							<h2 className='text-xl font-semibold mb-4 text-red-600'>Emails Sent</h2>
							<p>
								This section displays the emails and the number of emails sent to users.
								<p>Total mails sent: {parsedData.length > 0 && parsedData.length}</p>
							</p>
							<div className='mt-4'>
								{parsedData.length > 0 ? (
									<ul>
										{parsedData.map((mail, index) => (
											<li
												key={index}
												className='mb-2 p-2 border border-gray-200 rounded'
											>
												<p>
													<strong>Email:</strong> {mail.Email}
												</p>
												<p>
													<strong>Subject:</strong> {mail.subject}
												</p>
												<p>
													<strong>Message:</strong> {mail.message}
												</p>
												<p>
													<strong>Time:</strong> {mail.time}
												</p>
												<p>
													<strong>Date:</strong> {mail.date}
												</p>
											</li>
										))}
									</ul>
								) : (
									<p>No emails sent.</p>
								)}
							</div>
						</div>
					</div>
					<div className='bg-white shadow-md rounded p-6 mt-6'>
						<h2 className='text-xl font-semibold mb-4 text-red-600'>All Users</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
							<ViewUsers />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MainContent;
