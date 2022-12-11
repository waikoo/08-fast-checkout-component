import React from 'react';
import { STitle } from '../css/styled';

const Title = (props) => {
	const { step, shipping } = props;
	const displayTitle = (step) => {
		switch (step) {
			case 1:
				return 'Shipping Method';
			case 2:
				return 'Shipping Address';
			case 3:
				return 'Payment Options';
			default:
				return 'Unknown step';
		}
	};

	return <STitle lower={step === 2}>{displayTitle(step)}</STitle>;
};

export default Title;
