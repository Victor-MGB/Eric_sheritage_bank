import React, { useState } from "react";

const faqData = [
	{ question: "How to Access My Account Online?", answer: "Details on how to access your account online." },
	{ question: "Current Interest Rates?", answer: "Information about the current interest rates." },
	{ question: "Can I Transact Online?", answer: "Details about online transactions." },
	{ question: "Online Banking Features?", answer: "Information about online banking features." },
	{ question: "How Secure is My Data?", answer: "Information about data security." },
	{ question: "Credit/Debit Card Usage?", answer: "Details about credit and debit card usage." },
	{ question: "Mobile App for Banking?", answer: "Information about the mobile banking app." },
	{ question: "How to Contact Customer Support?", answer: "Details on how to contact customer support." },
];

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className='max-w-4xl mx-auto relative top-[2rem] p-6 bg-gray-100 rounded-lg shadow-md'>
			<h2 className='text-red-600 text-center text-sm font-semibold mb-1'>LATEST NEWS</h2>
			<h2 className='text-3xl font-bold text-center mb-6'>Our Latest Media Update</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				{faqData.map((item, index) => (
					<div
						key={index}
						className='bg-white rounded-lg shadow-md shadow-red-600 hover:py-[1rem] hover:transition-all duration-700 p-4'
					>
						<div
							className='flex justify-between items-center cursor-pointer'
							onClick={() => toggleFAQ(index)}
						>
							<h3 className='text-lg font-semibold'>{item.question}</h3>
							<span
								className={`text-xl ${
									activeIndex === index ? "text-red-600" : "text-gray-600"
								}`}
							>
								{activeIndex === index ? "-" : "+"}
							</span>
						</div>
						{activeIndex === index && (
							<div className='mt-2 text-gray-600'>
								<p>{item.answer}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;
