import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { FaArrowAltCircleDown, FaArrowAltCircleRight, FaWallet } from "react-icons/fa";

const Main = () => {
	const [isLoanShowing, setisLoanShowing] = useState<boolean>(false);

	const balanceChartData = {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [
			{
				label: "Balance",
				data: [0],
				borderColor: "rgba(75,192,192,1)",
				backgroundColor: "rgba(75,192,192,0.2)",
			},
		],
	};

	return (
		<main className='flex-1 bg-gray-400 rounded-xl p-6 w-[63rem] bg-opacity-40 min-h-screen m-auto my-[2rem]'>
			<BalanceOverview />

			{/* chart and loan section */}
			<BalanceChart
				balanchartData={balanceChartData}
				setterAndGetter={{
					handler: setisLoanShowing,
					state: isLoanShowing,
				}}
			/>

			{/* Recent Transactions */}
			<RecentTransactions />
		</main>
	);
};

export default Main;

const BalanceOverview = () => {
	return (
		<div className='bg-white p-6 rounded-lg shadow-md mb-6 flex items-center gap-[5rem] justify-normal'>
			{/* Balance Overview */}
			<div className={`flex items-center p-2 gap-2`}>
				<div
					className={`flex flex-col text-sm w-[10rem] p-2 bg-red-600 opacity-55 rounded-md text-white`}
				>
					<div className='flex items-center mb-2 w-full'>
						<FaWallet className='mr-2' />
						<h2 className='text-sm font-semibold'>Current Balance</h2>
					</div>
					<p className='text-2xl font-bold'>$0</p>
				</div>

				{/* loan balance */}
				<div
					className={`flex flex-col text-sm w-[10rem] p-2 bg-green-600 opacity-55 rounded-md text-white`}
				>
					<div className='flex items-center mb-2 w-full'>
						<FaWallet className='mr-2' />
						<h2 className='text-sm font-semibold'>loan Balance</h2>
					</div>
					<p className='text-2xl font-bold'>$0</p>
				</div>
			</div>

			{/* transact wiget */}
			<div className={`flex items-center justify-between p-2 w-full gap-3`}>
				{/* withdrawal */}
				<div
					className={`flex flex-col text-sm w-full cursor-pointer hover:border-cyan hover:shadow-black shadow-md  items-center p-3 bg-yellow-600 bg-opacity-55 rounded-md text-white capitalize`}
				>
					<div className='flex items-center mb-2 w-full'>
						<h2 className='text-lg font-semibold'>withdrawal</h2>
						<FaArrowAltCircleDown className='ml-2 text-lg' />
					</div>
				</div>

				{/* send  */}
				<div
					className={`flex flex-col text-sm w-full hover:shadow-black shadow-md items-center p-3 bg-blue-600 bg-opacity-55 rounded-md text-white capitalize`}
				>
					<div className='flex items-center mb-2 w-full'>
						<h2 className='text-lg font-semibold'>send</h2>
						<FaArrowAltCircleRight className='ml-2 text-lg' />
					</div>
				</div>
			</div>
		</div>
	);
};

const BalanceChart: React.FC<{
	balanchartData: {
		labels: string[];
		datasets: {
			label: string;
			data: number[];
			borderColor: string;
			backgroundColor: string;
		}[];
	};

	setterAndGetter: {
		handler: React.Dispatch<React.SetStateAction<boolean>>;
		state: boolean;
	};
}> = ({ balanchartData, setterAndGetter }) => {
	const { handler, state } = setterAndGetter;
	return (
		<div className={`flex items-center justify-normal gap-[1rem] w-full`}>
			{/* Current Balance Chart */}
			<div className='bg-slate-300 w-[20rem] p-3 rounded-lg shadow-md mb-6'>
				<h2 className='text-lg font-semibold mb-4'>Balance Overview</h2>
				<Line data={balanchartData} />
			</div>

			{/* Loan Application Section */}
			<div className='bg-white p-6 rounded-lg shadow-md mb-6'>
				<h2
					className='text-sm  text-white border w-[10rem] rounded-lg text-center font-bold h-[3rem] p-3  bg-red-600 hover:bg-opacity-45 cursor-pointer  mb-4'
					onClick={() => {
						handler(!state);
					}}
				>
					Apply for a Loan
				</h2>
				<form
					className={`h-0 overflow-hidden transition-all duration-700 w-[20rem] ${
						state ? "h-full duration-500 transition-all p-3" : "h-0 duration-500 transition-all"
					}`}
				>
					<div className='mb-4'>
						<label className='block text-gray-700'>Loan Amount</label>
						<input
							type='number'
							className='w-full border rounded-md p-2'
							placeholder='Enter amount'
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Loan Purpose</label>
						<input
							type='text'
							className='w-full border rounded-md p-2'
							placeholder='Enter purpose'
						/>
					</div>
					<button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded-md'>
						Apply Now
					</button>
				</form>

				{/* writes ups */}
				<p className={`text-sm text-neutral-600 jost text-pretty`}>
					Looking for a loan? We offer competitive rates and flexible terms to meet your financial
					needs. Our streamlined application process makes it easy to get the funds you need, when
					you need them. Apply today and take control of your financial future!
				</p>
			</div>
		</div>
	);
};

const RecentTransactions = () => {
	const [transactions, setTransactions] = useState<{ date: string; description: string; amount: number }[] | []>(
		[]
	);

	useEffect(() => {
		// Fetch transactions from API
		// Simulated with a timeout for demo purposes
		setTimeout(() => {
			setTransactions([
				// { date: "2023-05-01", description: "Salary", amount: 5000 },
				// { date: "2023-05-05", description: "Groceries", amount: -200 },
				// { date: "2023-05-10", description: "Rent", amount: -1000 },
			]);
		}, 1000);
	}, []);
	return (
		<div className='bg-white p-6 rounded-lg shadow-md'>
			<h2 className='text-lg font-semibold mb-4'>Recent Transactions</h2>
			{transactions.length === 0 ? (
				<p>No transactions yet.</p>
			) : (
				<table className='w-full'>
					<thead>
						<tr>
							<th className='text-left py-2 px-4'>Date</th>
							<th className='text-left py-2 px-4'>Description</th>
							<th className='text-right py-2 px-4'>Amount</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map((transaction, index) => (
							<tr key={index}>
								<td className='py-2 px-4'>{transaction.date}</td>
								<td className='py-2 px-4'>{transaction.description}</td>
								<td className='py-2 px-4 text-right'>${transaction.amount}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};
