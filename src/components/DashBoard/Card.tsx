const CardContainer: React.FC = () => {
	const cards = [
		{
			type: "Saving Card",
			balance: "$20,098.78",
			cardNumber: "2345",
			expireDate: "09/24",
			cvc: "123",
			status: "Active",
		},
		{
			type: "Travel Card",
			balance: "$0.00",
			cardNumber: "8642",
			expireDate: "04/29",
			cvc: "456",
			status: "Expired",
		},
		{
			type: "Visa Card",
			balance: "$0.00",
			cardNumber: "2345",
			expireDate: "09/24",
			cvc: "789",
			status: "Expired",
		},
	];

	return (
		<div className='flex w-[63rem] p-2 mr-[7rem] bg-red-300 m-auto max-w-full   flex-wrap justify-center space-x-4'>
			{cards.map((card, index) => (
				<Card
					key={index}
					type={card.type}
					balance={card.balance}
					cardNumber={card.cardNumber}
					expireDate={card.expireDate}
					cvc={card.cvc}
					status={card.status as "Active" | "Expired"}
				/>
			))}
		</div>
	);
};

export default CardContainer;

interface CardProps {
	type: string;
	balance: string;
	cardNumber: string;
	expireDate: string;
	cvc: string;
	status: "Active" | "Expired";
}

const Card: React.FC<CardProps> = ({ type, balance, cardNumber, expireDate, cvc, status }) => {
	const statusClasses = status === "Active" ? "bg-green-500" : "bg-red-500";

	return (
		<div className='border rounded-lg p-4 shadow-md bg-white w-80'>
			<div className='flex justify-between items-center mb-4'>
				<span className='text-gray-600'>Virtual Card</span>
				<button className='text-gray-600'>Details</button>
			</div>
			<div className='relative p-4 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-white mb-4'>
				<div className='absolute top-4 left-4'>
					<i className='fab fa-bluetooth-b'></i>
				</div>
				<div className='absolute top-4 right-4'>
					<i className='fab fa-cc-mastercard'></i>
				</div>
				<div className='flex justify-between items-center'>
					<h3 className='text-xl font-semibold'>{type}</h3>
					<span className={`px-2 py-1 rounded-full text-sm ${statusClasses}`}>{status}</span>
				</div>
				<div className='text-2xl font-bold mt-2'>{balance}</div>
			</div>
			<div className='text-gray-600'>
				<div className='flex justify-between mb-2'>
					<span>Card Number</span>
					<span>{`**** ${cardNumber}`}</span>
				</div>
				<div className='flex justify-between mb-2'>
					<span>Expire Date</span>
					<span>{expireDate}</span>
				</div>
				<div className='flex justify-between'>
					<span>CVC</span>
					<span>{`***${cvc}`}</span>
				</div>
			</div>
		</div>
	);
};
