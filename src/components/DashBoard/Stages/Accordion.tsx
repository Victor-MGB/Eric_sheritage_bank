/* eslint-disable react/jsx-pascal-case */
import { fetchActivation } from "../MainBar";
import Stage_1 from "./Stage_1";
import Stage_2 from "./Stage_2";
import Stage_3 from "./Stage_3";
import Stage_4 from "./Stage_4";
import Stage_5 from "./Stage_5";
import Stage_6 from "./Stage_6";
import Stage_7 from "./Stage_7";

const Accordion: React.FC = () => {
	// Fetch the stage activation flags
	const { stage_1, stage_2, stage_3, stage_4, stage_5, stage_6, stage_7 } = fetchActivation();

	// Define stages with their activation status
	const stages = [
		{ component: <Stage_1 />, isActive: stage_1 },
		{ component: <Stage_2 />, isActive: stage_2 },
		{ component: <Stage_3 />, isActive: stage_3 },
		{ component: <Stage_4 />, isActive: stage_4 },
		{ component: <Stage_5 />, isActive: stage_5 },
		{ component: <Stage_6 />, isActive: stage_6 },
		{ component: <Stage_7 />, isActive: stage_7 },
	];

	// Find the active stage (first one with isActive: true)
	const activeStage = stages.find((stage) => stage.isActive);

	return (
		<div className="accordion p-1 bg-transparent h-[100%] top-0 flex items-center flex-col absolute left-0 right-0 z-50">
			{/* Render the active stage if available */}
			{activeStage ? (
				activeStage.component
			) : (
				<div className="warning-message p-4 bg-red-200 text-red-800 rounded-lg">
					<p>You need to complete the required stage(s) before proceeding to withdraw funds.</p>
					<p>Please check your dashboard for details.</p>
				</div>
			)}
		</div>
	);
};

export default Accordion;
