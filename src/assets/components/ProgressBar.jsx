import React from 'react';
import { Line, SProgressBar } from '../css/styled';
import { ACTION } from '../uiReducer';
import ProgressItem from './ProgressItem';

const ProgressBar = (props) => {
	const {
		uiState: { hideProgressBar, completedSteps },
		editFromSummary
	} = props;

	// TODO: useReducer here when clicking through the progressItems
	let is1Completed = completedSteps[0] === 1;
	let is2Completed = completedSteps[1] === 2;
	let is3Completed = completedSteps[2] === 3;
	let is4Completed = completedSteps[3] === 4;

	return (
		<>
			{!hideProgressBar ? (
				<SProgressBar>
					<ProgressItem
						isCompleted={is1Completed}
						number={1}
						editFromSummary={editFromSummary}>
						Shipping
					</ProgressItem>
					<Line />
					<ProgressItem
						isCompleted={is2Completed}
						number={2}
						editFromSummary={editFromSummary}>
						Address
					</ProgressItem>
					<Line />
					<ProgressItem
						isCompleted={is3Completed}
						number={3}
						editFromSummary={editFromSummary}>
						Payment
					</ProgressItem>
					<Line />
					<ProgressItem
						isCompleted={is4Completed}
						number={4}
						editFromSummary={editFromSummary}>
						Confirm
					</ProgressItem>
				</SProgressBar>
			) : null}
		</>
	);
};

export default ProgressBar;
