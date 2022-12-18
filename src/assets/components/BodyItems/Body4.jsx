import React from 'react';
import { SSummaryCon } from '../../css/styled';
import images from '../../images/index_images';
import inputData from '../../newAddressInputData';
import { body3 } from '../../radioInputs';
import { ACTION } from '../../uiReducer';
import CartItem from '../CartItem';
import InputLabel from '../Input';

const Body4 = (props) => {
	const { shipping, uiDispatch, editFromSummary } = props;

	return (
		<SSummaryCon>
			<CartItem renderCart={true} />
			<InputLabel
				isPrevAddress={false}
				isSummary={true}
				renderMethod={true}
				methodTitle='Shipping Method'
				methodBody={shipping.method === 'home' ? 'Home delivery' : 'Collect from store'}
				shipping={shipping}
				editFromSummary={editFromSummary}
			/>

			<InputLabel
				isPrevAddress={false}
				isSummary={true}
				renderAddress={true}
				shippingTitle='Shipping Address'
				shipping={shipping}
				editFromSummary={editFromSummary}
			/>

			<InputLabel
				isPrevAddress={false}
				isSummary={true}
				renderPayment={true}
				paymentTitle='Payment Option'
				paymentBody={shipping.payment === 'card' ? 'Credit Card' : 'Cash'}
				shipping={shipping}
				editFromSummary={editFromSummary}
			/>
		</SSummaryCon>
	);
};

export default Body4;
