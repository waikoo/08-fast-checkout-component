import React from 'react';
import images from '../../images/index_images';
import inputData from '../../newAddressInputData';
import { body3 } from '../../radioInputs';
import CartItem from '../CartItem';
import InputLabel from '../Input';

const Body4 = (props) => {
	const { shipping } = props;
	return (
		<div>
			<CartItem />
			<InputLabel
				// shipping={shipping}
				// uiState={uiState}
				isPrevAddress={false}
				isSummary={true}
				key={1}
				summaryTitle='Shipping Address'
				shipping={shipping}></InputLabel>
			;
		</div>
	);
};

export default Body4;
