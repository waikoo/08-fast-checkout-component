import React from 'react';
import { Line, SProgressBar } from '../css/styled';
import ProgressItem from './ProgressItem';

const ProgressBar = (props) => {
	const { completedSteps, isEditingAddress } = props;

	let is1Completed = completedSteps[0] === 1;
	let is2Completed = completedSteps[0] === 2;

	return (
		<>
			{!isEditingAddress ? (
				<SProgressBar>
					<ProgressItem
						isCompleted={is1Completed}
						number={1}>
						Shipping
					</ProgressItem>
					<Line />
					<ProgressItem
						isCompleted={is2Completed}
						number={2}>
						Address
					</ProgressItem>
					<Line />
					<ProgressItem number={3}>Payment</ProgressItem>
					<Line />
					<ProgressItem number={4}>Confirm</ProgressItem>
				</SProgressBar>
			) : null}
		</>
	);
};

export default ProgressBar;
