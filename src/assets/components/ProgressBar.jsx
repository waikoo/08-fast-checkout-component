import React from 'react';
import { Line, SProgressBar } from '../css/styled';
import ProgressItem from './ProgressItem';

const ProgressBar = () => {
	let isCompleted = true;

	return (
		<SProgressBar>
			<ProgressItem
				isCompleted
				number={1}>
				Shipping
			</ProgressItem>
			<Line />
			<ProgressItem number={2}>Address</ProgressItem>
			<Line />
			<ProgressItem number={3}>Payment</ProgressItem>
			<Line />
			<ProgressItem number={4}>Confirm</ProgressItem>
		</SProgressBar>
	);
};

export default ProgressBar;
