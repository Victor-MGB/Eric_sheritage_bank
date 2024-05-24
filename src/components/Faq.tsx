import React, { useState } from "react";

const faqData = [
	{
		question: "What is Grand Vision Trust?",
		answer: "Grand Vision Trust is a financial institution offering a wide range of services...",
	},
	{
		question: "How can I open an account?",
		answer: "You can open an account by visiting our website and filling out the online form...",
	},
	{
		question: "How do I open a bank account?",
		answer: "You can open a bank account by visiting a local branch or applying online through the bank's website. You'll need to provide identification documents, proof of address, and other required information.",
	},
	{
		question: "What are the different types of bank accounts available?",
		answer: "Common types of bank accounts include savings accounts, checking accounts, fixed deposit accounts, and money market accounts. Each type has different features and benefits tailored to various needs.",
	},
	{
		question: "How can I reset my online banking password?",
		answer: "You can reset your online banking password by clicking the 'Forgot Password' link on the bank's login page. Follow the instructions to verify your identity and set a new password.",
	},
	{
		question: "What is the minimum balance required for a savings account?",
		answer: "The minimum balance required for a savings account varies by bank and account type. It's best to check with your bank for specific details regarding minimum balance requirements.",
	},
	{
		question: "How can I transfer money between accounts?",
		answer: "You can transfer money between accounts using online banking, mobile banking apps, ATMs, or by visiting a local branch. Online and mobile banking are usually the most convenient options.",
	},
	{
		question: "What should I do if my debit card is lost or stolen?",
		answer: "If your debit card is lost or stolen, immediately contact your bank's customer service to report it. They will block the card to prevent unauthorized transactions and issue a replacement card.",
	},
	{
		question: "What fees are associated with using ATMs?",
		answer: "ATM fees vary depending on whether you use your bank's ATMs or other banks' ATMs. Using your bank's ATMs is typically free, while using another bank's ATMs may incur a fee. Check with your bank for specific fee details.",
	},
	{
		question: "How do I apply for a loan?",
		answer: "You can apply for a loan by visiting your bank's branch, applying online through their website, or contacting their customer service. You'll need to provide personal and financial information, and the bank will evaluate your application based on creditworthiness and other factors.",
	},
	{
		question: "What is online banking and how does it work?",
		answer: "Online banking allows you to manage your bank accounts and perform transactions through the bank's website or mobile app. It provides features like balance checks, fund transfers, bill payments, and account statements, all accessible from your computer or smartphone.",
	},
	{
		question: "How can I check my account balance?",
		answer: "You can check your account balance through online banking, mobile banking apps, ATMs, or by visiting a local branch. Online and mobile banking are the most convenient methods, providing real-time access to your account information.",
	},
];

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className='max-w-2xl mx-auto p-6 bg-primary  flex flex-col h-[50vw] overflow-scroll relative top-[4rem] gap-[3rem] rounded-lg shadow-md'>
			<h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>Frequently Asked Questions</h2>
			{faqData.map((item, index) => (
				<div className={`bg-blue-200 m-3`}>
					<div
						className={`flex items-center p-2 w-full justify-between`}
						onClick={() => toggleFAQ(index)}
					>
						<h3 className='text-lg text-blue-700'>{item.question}</h3>
						<span className='text-xl text-blue-700 rounded-full bg-black w-[3rem] h-[3rem] flex items-center justify-center'>
							{activeIndex === index ? "-" : "+"}
						</span>
					</div>
					<div
						key={index}
						className={` justify-between opacity-30 items-center rounded cursor-pointer mb-4 flex flex-col overflow-hidden h-0  transform ${
							activeIndex === index
								? "h-[10rem]   opacity-100 transition-all duration-700 p-2"
								: "opacity-10 duration-700 transition-all"
						}  `}
					>
						<p className='p-3 m-2 bg-blue-50 w-fit rounded mt-2 text-gray-700'>{item.answer}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default FAQ;
