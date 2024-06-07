import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./Main";

const Admin = () => {
	return (
		<div className='flex h-screen '>
			<Sidebar />
			<div className='flex-1 p-6 bg-gray-100'>
				<MainContent />
			</div>
		</div>
	);
};

export default Admin;
