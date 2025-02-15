import React from 'react'
import { FaFileUpload } from "react-icons/fa";


const Stage_1 = () => {
 return (
		<div className='h-full w-full m-3 md:m-0 flex items-center justify-center bg-black bg-opacity-40'>
			<div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
				<h2 className='text-2xl font-bold mb-6 text-center'>Let the admin check your ID</h2>
				<p className='text-gray-700 mb-4'>
				To continue, please upload a valid form of identification, such as an international passport or driver's license. This is required to verify your identity and activate your account.
Account activation involves both document submission and payment, as outlined in our terms and conditions. Additional steps may be necessary to complete the process.
				</p>
				<div className='mb-4'>
					<label className='block text-gray-700 mb-2' htmlFor='fileUpload'>
						Upload Document
					</label>
					<input
						type='file'
						id='fileUpload'
						className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none'
						accept='.pdf,.jpg,.jpeg,.png'
					/>
				</div>
				<button className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center justify-center'>
					<FaFileUpload className='mr-2' /> Upload
				</button>
			</div>
		</div>
 );
}

export default Stage_1