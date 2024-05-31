import React, { useState } from "react";
import {
	FaUserCircle,
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaCalendarAlt,
	FaIdCard,
	FaMoneyBillAlt,
	FaGlobeAmericas,
	FaMapMarkedAlt,
	FaCity,
	FaMailBulk,
	FaMobileAlt,
	FaPhoneAlt,
	FaBuilding,
	FaChartLine,
	FaCheckCircle,
	FaCreditCard,
	FaHandHoldingUsd,
	FaLock,
} from "react-icons/fa";
import { FaVenusMars } from "react-icons/fa6";

const Profile = () => {
	const [profilePicture, setProfilePicture] = useState<File | null>(null);

	const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			setProfilePicture(event.target.files[0]);
		}
	};

	return (
		<div className='bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto'>
			<div className='flex items-center mb-8'>
				<div className='mr-6'>
					{profilePicture ? (
						<img
							src={URL.createObjectURL(profilePicture)}
							alt='Profile pic'
							className='w-24 h-24 rounded-full object-cover shadow-md'
						/>
					) : (
						<FaUserCircle className='text-gray-400 text-7xl' />
					)}
				</div>
				<div>
					<div className={`flex flex-col justify-start`}>
						<h2 className='text-3xl font-bold'>John Doe</h2>
						<p className='text-gray-600'>Banking User</p>
					</div>
					<div className='mt-8 text-center'>
						<label
							htmlFor='profilePicture'
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer inline-block'
						>
							Update Profile Picture
						</label>
						<input
							id='profilePicture'
							type='file'
							accept='image/*'
							className='hidden'
							onChange={handleProfilePictureChange}
						/>
					</div>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<ProfileField icon={<FaEnvelope />} label='Email' value='john.doe@example.com' />
				<ProfileField icon={<FaPhone />} label='Phone' value='+1 (555) 555-5555' />
				<ProfileField icon={<FaMapMarkerAlt />} label='Address' value='123 Main Street, Anytown USA' />
				<ProfileField icon={<FaCalendarAlt />} label='Date of Birth' value='January 1, 1990' />
				<ProfileField icon={<FaIdCard />} label='Account Number' value='1234567890' />
				<ProfileField icon={<FaMoneyBillAlt />} label='Current Balance' value='$10,000' />
				<ProfileField icon={<FaVenusMars />} label='Gender' value='Male' />
				<ProfileField icon={<FaGlobeAmericas />} label='Nationality' value='American' />
				<ProfileField icon={<FaCity />} label='City' value='New York' />
				<ProfileField icon={<FaMapMarkedAlt />} label='State/Province' value='New York' />
				<ProfileField icon={<FaMailBulk />} label='Postal Code' value='10001' />
				<ProfileField icon={<FaGlobeAmericas />} label='Country' value='United States' />
				<ProfileField icon={<FaMobileAlt />} label='Mobile Number' value='+1 (555) 555-5555' />
				<ProfileField icon={<FaPhoneAlt />} label='Home Number' value='+1 (555) 555-5556' />
				<ProfileField icon={<FaCheckCircle />} label='Account Type' value='Checking' />
				<ProfileField icon={<FaCheckCircle />} label='Account Type' value='Savings' />
				<ProfileField icon={<FaCreditCard />} label='Account Type' value='Credit Card' />
				<ProfileField icon={<FaHandHoldingUsd />} label='Account Type' value='Loan' />
				<ProfileField icon={<FaChartLine />} label='Account Type' value='Investment' />
				<ProfileField
					icon={<FaBuilding />}
					label='Home Branch Location'
					value='123 Main Street, New York, NY 10001'
				/>
				<ProfileField icon={<FaCheckCircle />} label='Account Status' value='Active' />
				<ProfileField icon={<FaUserCircle />} label='Username' value='johndoe' />
				<ProfileField icon={<FaLock />} label='Password' value='(hashed)' />
			</div>
		</div>
	);
};

const ProfileField = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
	<div className='flex items-center p-4 bg-gray-50 rounded-lg shadow'>
		<div className='mr-4 text-blue-500 text-2xl'>{icon}</div>
		<div>
			<p className='text-gray-600 font-semibold'>{label}</p>
			<p className='text-gray-800'>{value}</p>
		</div>
	</div>
);

export default Profile;
