import { memo } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	return (
		<header className='bg-gray-100 rounded-xl w-full max-w-full shadow-md py-4 px-6 flex justify-between items-center mb-[1rem'>
			<div
				className='flex items-center space-x-4 cursor-pointer'
				onClick={() => {
					navigate("/dashboard");
				}}
			>
				<h1 className='text-xl hover:text-red-300 capitalize text-neutral-600 orbitron font-bold'>
					DashBoard
				</h1>
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
