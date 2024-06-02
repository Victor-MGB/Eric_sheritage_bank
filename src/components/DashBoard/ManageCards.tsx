import React, { useState, useEffect } from "react";

interface CardProps {
	id: string;
	type: string;
	holderName: string;
	balance: string;
	cardNumber: string;
	expireDate: string;
	cvc: string;
	status: "Active" | "Inactive";
}

const generateCardNumber = () => {
	return "**** **** **** " + Math.floor(1000 + Math.random() * 9000).toString();
};

const generateExpireDate = () => {
	const now = new Date();
	const year = now.getFullYear() + 3;
	const month = ("0" + (now.getMonth() + 1)).slice(-2);
	return `${month}/${year.toString().slice(-2)}`;
};

const generateCVC = () => {
	return Math.floor(100 + Math.random() * 900).toString();
};

const CardManager: React.FC = () => {
	const [cards, setCards] = useState<CardProps[]>([]);
	const [newCard, setNewCard] = useState<{ type: string; holderName: string }>({
		type: "",
		holderName: "",
	});

	useEffect(() => {
		const storedCards = localStorage.getItem("cards");
		if (storedCards) {
			setCards(JSON.parse(storedCards));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cards", JSON.stringify(cards));
	}, [cards]);

	const addCard = () => {
		const id = new Date().getTime().toString();
		setCards([
			...cards,
			{
				id,
				type: newCard.type,
				holderName: newCard.holderName,
				balance: "0.00",
				cardNumber: generateCardNumber(),
				expireDate: generateExpireDate(),
				cvc: generateCVC(),
				status: "Inactive",
			},
		]);
		setNewCard({
			type: "",
			holderName: "",
		});
	};

	const deleteCard = (id: string) => {
		setCards(cards.filter((card) => card.id !== id));
	};

	const setActive = (id: string, active: boolean) => {
		setCards(
			cards.map((card) => (card.id === id ? { ...card, status: active ? "Active" : "Inactive" } : card))
		);
	};

	const fundCard = (id: string, amount: string) => {
		setCards(
			cards.map((card) =>
				card.id === id
					? { ...card, balance: (parseFloat(card.balance) + parseFloat(amount)).toFixed(2) }
					: card
			)
		);
	};

	return (
		<div>
			<div className='mb-4'>
				<h2 className='text-lg font-bold mb-2'>Add New Card</h2>
				<select
					value={newCard.type}
					onChange={(e) => setNewCard({ ...newCard, type: e.target.value })}
					className='border p-2 mb-2 w-full'
				>
					<option value='' disabled>
						Select Card Type
					</option>
					<option value='Debit'>Debit</option>
					<option value='Credit'>Credit</option>
				</select>
				<input
					type='text'
					placeholder='Holder Name'
					value={newCard.holderName}
					onChange={(e) => setNewCard({ ...newCard, holderName: e.target.value })}
					className='border p-2 mb-2 w-full'
				/>
				<button onClick={addCard} className='bg-blue-500 text-white p-2 rounded'>
					Add Card
				</button>
			</div>
			<div>
				{cards.map((card) => (
					<div key={card.id} className='mb-4'>
						<Card {...card} />
						<div className='flex justify-between'>
							<button
								onClick={() => deleteCard(card.id)}
								className='bg-red-500 text-white p-2 rounded'
							>
								Delete
							</button>
							<button
								onClick={() => setActive(card.id, card.status === "Inactive")}
								className='bg-yellow-500 text-white p-2 rounded'
							>
								{card.status === "Inactive" ? "Activate" : "Deactivate"}
							</button>
							<button
								onClick={() =>
									fundCard(card.id, prompt("Enter amount to fund:") || "0")
								}
								className='bg-green-500 text-white p-2 rounded'
							>
								Fund
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CardManager;

interface CardProps {
	id: string;
	type: string;
	holderName: string;
	balance: string;
	cardNumber: string;
	expireDate: string;
	cvc: string;
	status: "Active" | "Inactive";
}

const Card: React.FC<CardProps> = ({ type, holderName, balance, cardNumber, expireDate, cvc, status }) => {
	return (
		<div className='card-container'>
			<div className='card front'>
				<div className='card-content'>
					<div className='card-type'>{type} Card</div>
					<div className='card-number'>{cardNumber}</div>
					<div className='card-holder'>{holderName}</div>
					<div className='card-expiry'>Valid Thru: {expireDate}</div>
				</div>
			</div>
			<div className='card back'>
				<div className='card-content'>
					<div className='card-strip'></div>
					<div className='card-cvc'>
						<span>CVC:</span>
						<span>{cvc}</span>
					</div>
					<div className={`card-status ${status === "Active" ? "bg-green-500" : "bg-red-500"}`}>
						{status}
					</div>
				</div>
			</div>
		</div>
	);
};
