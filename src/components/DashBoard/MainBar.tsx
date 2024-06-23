import React, { useState, useEffect, useContext, useCallback } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { FaArrowAltCircleDown, FaArrowAltCircleRight, FaWallet } from "react-icons/fa";
import { UserDataCOntext } from "../../App";
import Accordion from "./Stages/Accordion";

interface BalanceChartData {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		borderColor: string;
		backgroundColor: string;
	}[];
}

//fetch the activation value
export const fetchActivation = () => {
	const serializedData: string | null = sessionStorage.getItem("stages");

	console.log('stage data',serializedData);

	// Deserialize data
	const deserializedData = serializedData ? JSON.parse(serializedData) : null;

	if (deserializedData) {
		const { stage_1, stage_2, stage_3, stage_4 } = deserializedData;
		return { stage_1, stage_2, stage_3, stage_4 };
	} else {
		// Handle the case where deserializedData is null
		return { stage_1: null, stage_2: null, stage_3: null, stage_4: null };
	}
};

const Main: React.FC = () => {
	const [isLoanShowing, setIsLoanShowing] = useState<boolean>(false);
	const [balance, setBalance] = useState<number>(0);
	const balanceContextData = useContext(UserDataCOntext);
	const [isStagesShowing, setisStagesShowing] = useState(false);

	const handleStage = useCallback((value: boolean) => {
		setisStagesShowing(value);
	}, []);

	useEffect(() => {
		setBalance(balanceContextData?.accounts[0].balance || 0);
	}, [balanceContextData?.accounts]);

	const balanceChartData: BalanceChartData = {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [
			{
				label: "Balance",
				data: [balanceContextData?.accounts[0].balance || 0, 0, 0, 0.5, 2],
				borderColor: "rgba(75,192,192,1)",
				backgroundColor: "rgba(75,180,192,0.2)",
			},
		],
	};

	return (
		<main className='flex-1 bg-gray-100 flex flex-col gap-0 md:gap-[3rem] rounded-xl p-6 w-auto  h-fit m-auto my-[2rem] [margin:0 4rem] '>
			{isStagesShowing ? <Accordion /> : null}
			<BalanceOverview balance={balance} handleStage={handleStage} />

			{/* chart and loan section */}
			<BalanceChart
				balanchartData={balanceChartData}
				setterAndGetter={{
					handler: setIsLoanShowing,
					state: isLoanShowing,
				}}
			/>
		</main>
	);
};
export default Main;

interface BalanceOverviewProps {
	balance: number;
	handleStage: (value: boolean) => void;
}

//balance overview
const BalanceOverview: React.FC<BalanceOverviewProps> = ({ balance, handleStage }) => {
	const [withdrawalOpen, setWithdrawalOpen] = useState<boolean>(false);
	const [sendOpen, setSendOpen] = useState<boolean>(false);

	const handleWithdrawalOpen = (value: boolean) => {
		setWithdrawalOpen(value);
	};

	const handleSendOpen = (valeu: boolean) => {
		setSendOpen(valeu);
	};
	const { stage_1, stage_2, stage_3, stage_4 } = fetchActivation();

	// when component mounts , check if all stage are activated by the server
	useEffect(() => {
		const activateWithdrawal = () => {
			if (stage_1 && stage_2 && stage_3 && stage_4) {
				handleWithdrawalOpen(true);
				handleSendOpen(true);
			} else {
				handleWithdrawalOpen(false);
				handleSendOpen(false);
			}
		};
		activateWithdrawal();
	}, [stage_1, stage_2, stage_3, stage_4]);

	return (
		<div className='bg-white p-6 rounded-lg shadow-md mb-6 md:w-full w sm:flex flex-wrap justify-between items-center'>
			{/* loan and balance view */}
			<div className='flex items-center gap-6 mb-6'>
				<div className='flex flex-col'>
					<div className='flex items-center mb-2'>
						<FaWallet className='mr-2 text-xl text-blue-500' />
						<h2 className='text-lg font-semibold'>Current Balance</h2>
					</div>
					<p className='text-xl font-bold'>${balance}</p>
				</div>
				<div className='flex flex-col'>
					<div className='flex items-center mb-2'>
						<FaWallet className='mr-2 text-xl text-blue-500' />
						<h2 className='text-lg font-semibold'>Loan Balance</h2>
					</div>
					<p className='text-xl font-bold'>$0</p>
				</div>
			</div>

			{/* withdraw and send view */}
			<div className='flex flex-col md:flex-row items-center bg-gray-800 p-2 rounded-md shadow-sm shadow-gray-800 gap-6'>
				<div
					className='flex items-center p-3 bg-yellow-600 bg-opacity-75 rounded-lg cursor-pointer'
					onClick={() => {
						handleStage(true);
						handleWithdrawalOpen(false);
					}}
				>
					<FaArrowAltCircleDown className='text-xl mr-2 text-white' />
					<h2 className='text-lg font-semibold'>Withdrawal</h2>
				</div>

				{/* withdrawal dropdwn */}
				{withdrawalOpen && (
					<div className='flex flex-col border p-4 rounded-md bg-gray-100 absolute left-[8rem]'>
						<label className='text-gray-600'>Amount:</label>
						<input type='number' className='border rounded-md p-2 mb-4' />
						<button className='bg-blue-500 text-white rounded-md py-2 px-4'>Withdraw</button>
					</div>
				)}

				<div
					className='flex items-center p-3 bg-blue-600 bg-opacity-75 rounded-lg cursor-pointer'
					onClick={() => {
						handleStage(true);
						handleSendOpen(false);
					}}
				>
					<FaArrowAltCircleRight className='text-xl mr-2 text-white' />
					<h2 className='text-lg font-semibold'>Send</h2>
				</div>

				{/* send dropdwn */}
				{sendOpen && (
					<div className='flex flex-col border p-4 rounded-md bg-gray-100 absolute left-[8rem]'>
						<label className='text-gray-600'>Recipient:</label>
						<input type='text' className='border rounded-md p-2 mb-4' />
						<label className='text-gray-600'>Amount:</label>
						<input type='number' className='border rounded-md p-2 mb-4' />
						<button className='bg-blue-500 text-white rounded-md py-2 px-4'>Send</button>
					</div>
				)}
			</div>
		</div>
	);
};

//balance chart component
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
		<div
			className={`flex flex-wrap md:flex-nowrap items-center justify-normal gap-[1rem] w-full bg-transparent p-2 `}
		>
			{/* Current Balance Chart */}
			<div className='bg-slate-300 w-full md:w-[20rem] p-3 rounded-lg shadow-md mb-6'>
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

export const RecentTransactions = () => {
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
