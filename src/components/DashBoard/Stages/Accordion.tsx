/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import { fetchActivation } from "../MainBar";
import Stage_1 from "./Stage_1";
import Stage_2 from "./Stage_2";
import Stage_3 from "./Stage_3";
import Stage_4 from "./Stage_4";

const Accordion: React.FC = () => {
	const { stage_1, stage_2, stage_3, stage_4 } = fetchActivation();
	const [counter, setcounter] = useState(0);

	const stages = [
		{ component: <Stage_1 />, isActive: stage_1 },
		{ component: <Stage_2 />, isActive: stage_2 },
		{ component: <Stage_3 />, isActive: stage_3 },
		{ component: <Stage_4 />, isActive: stage_4 },
	];

	const incrementCounter = () => {
		setcounter((prev) => {
			return prev + 1;
		});
	};

	return (
		<div className='accordion p-1 bg-transparent w-[100rem] h-[100vh] top-0 flex items-center flex-col absolute left-[19rem] right-0 z-50  '>
			<>{stages[counter].isActive && <>{stages[counter].component}</>}</>

			<button className={`p-3 w-[10rem] bg-gray-900 rounded-lg `} onClick={incrementCounter}>
				Next
			</button>
		</div>
	);
};

export default Accordion;
