// Security.tsx
import React from "react";

const Security: React.FC = () => (
	<div className='min-h-screen z-10 bg-gray-100 p-6 flex items-center justify-center'>
		<div className='flex flex-col lg:flex-row items-center gap-8'>
			<SecurityInfoCard />
			<SecurityImage src={`assets/images/4515.jpg`} />
		</div>
	</div>
);

export default Security;

const SecurityInfoCard: React.FC = () => (
	<div className='bg-white p-6 rounded-lg shadow-lg max-w-xl'>
		<h2 className='text-2xl font-bold mb-4'>We’re serious about your security</h2>
		<p className='mb-4'>
			We use industry-first technology, like a tool that tells you whether or not you're speaking to a
			scammer in real time, to keep you safe.
		</p>
		<p className='mb-4'>
			You can freeze your card instantly if you need to, or speak to one of our experts in-app if something
			doesn’t feel right.
		</p>
	</div>
);

const SecurityImage: React.FC<{ src: string }> = ({ src }) => (
	<div className='flex justify-center items-center w-[50vw]'>
		<img src={src} alt='Security' className='rounded-lg shadow-lg w-full h-auto' />
	</div>
);
