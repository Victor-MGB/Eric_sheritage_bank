import React from 'react'
import { FaFileUpload } from "react-icons/fa";


const Stage_1 = () => {
 return (
		<div className='h-full w-full m-3 md:m-0 flex items-center justify-center bg-black bg-opacity-40'>
			<div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
				<h2 className='text-2xl font-bold mb-6 text-center'>Upload Your Identification</h2>
				<p className='text-gray-700 mb-4'>
					To proceed, please upload a valid form of identification such as an international passport
					or driver's license. This step is necessary to verify your identity and activate your
					account. Kindly note that account activation requires both document submission and a
					payment as per our terms and conditions. Additional steps may be required to complete the
					activation process.
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