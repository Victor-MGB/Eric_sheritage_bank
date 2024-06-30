/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import { fetchActivation } from "../MainBar";
import Stage_1 from "./Stage_1";
import Stage_2 from "./Stage_2";
import Stage_3 from "./Stage_3";
import Stage_4 from "./Stage_4";
import Stage_5 from "./Stage_5";
import Stage_7 from "./Stage_7";
import Stage_6 from "./Stage_6";

const Accordion: React.FC = () => {
	const { stage_1, stage_2, stage_3, stage_4,stage_5,stage_6,stage_7 } = fetchActivation();
	const [counter, setCounter] = useState(0);

	const stages = [
		{ component: <Stage_1 />, isActive: stage_1 },
		{ component: <Stage_2 />, isActive: stage_2 },
		{ component: <Stage_3 />, isActive: stage_3 },
		{ component: <Stage_4 />, isActive: stage_4 },
		{ component: <Stage_5 />, isActive: stage_5 },
		{ component: <Stage_6 />, isActive: stage_6 },
		{ component: <Stage_7 />, isActive: stage_7 },



	];

	const incrementCounter = () => {
		setCounter((prev) => (prev < stages.length - 1 ? prev + 1 : prev));
	};

	return (
		<div className='accordion p-1 bg-transparent h-[100rem] md:h-[100%] top-0 flex items-center flex-col absolute left-[0rem] right-[0rem] z-50'>
			{!stages[counter].isActive && stages[counter].component}

			<button className='p-3 w-[10rem] bg-gray-900 rounded-lg mt-4' onClick={incrementCounter}>
				Next
			</button>
		</div>
	);
};

export default Accordion;
