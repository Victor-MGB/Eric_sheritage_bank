import { useEffect, useState } from "react";

 export const UseTypeWriter = ({ text, delay  }: { text: string; delay: number }) => {
	const [displayText, setDisplayText] = useState("");

	useEffect(() => {
		let currentIndex = 0;
		const intervalId = setInterval(() => {
			setDisplayText((prevText) => prevText + text.charAt(currentIndex));
			currentIndex++;
			if (currentIndex === text.length) {
				clearInterval(intervalId);
			}
		}, delay);

		return () => clearInterval(intervalId);
	}, [text, delay]);

	return <span>{displayText}</span>;
};
