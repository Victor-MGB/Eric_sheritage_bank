import { memo } from "react";

const Header = () => {
	return (
		<header className='bg-gray-100 rounded-xl w-full max-w-full shadow-md py-4 px-6 flex justify-between items-center'>
			<div className='flex items-center space-x-4'>
				<h1 className='text-xl capitalize text-neutral-600 orbitron font-bold'>welcome user</h1>
			</div>

			<div className='flex items-center space-x-4'>
				<input type='text' placeholder='Search...' className='border rounded-md p-2  ring-[2px]' />
				<button className='text-gray-600'>
					<i className='fas fa-bell'></i>
				</button>
				<div className='flex items-center space-x-2'>
					<img src='/path-to-profile-pic.jpg' alt='Profile' className='w-8 h-8 rounded-full' />
					<span className='text-gray-600'>John Doe</span>
				</div>
			</div>
		</header>
	);
};

export default memo(Header);
