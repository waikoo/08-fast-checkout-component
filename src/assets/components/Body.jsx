import React, { useReducer } from 'react';
import { INITIAL_STATE, reducer } from '../formReducer';
import Body1 from './BodyItems/Body1';
import Body2 from './BodyItems/Body2';
import Body3 from './BodyItems/Body3';
import Button from './Button';

const Body = (props) => {
	const { uiState, step, uiDispatch } = props;

	const [shipping, dispatchShipping] = useReducer(reducer, INITIAL_STATE);

	const handleAddressChange = (e) => {
		dispatchShipping({
			type: 'CHANGE_ADDRESS',
			payload: { state: e.target.dataset.state, value: e.target.value }
		});
	};

	const handleMethodChange = (e) =>
		dispatchShipping({
			type: 'CHANGE_METHOD',
			payload: { name: e.target.dataset.method, value: e.target.value }
		});

	const handlePaymentChange = (e) =>
		dispatchShipping({
			type: 'CHANGE_PAYMENT',
			payload: { name: e.target.dataset.payment, value: e.target.value }
		});

	console.log(shipping);
	return (
		<div>
			{uiState.body === 1 && <Body1 handleMethodChange={handleMethodChange} />}

			{uiState.body === 2 && (
				<Body2
					step={step}
					uiState={uiState}
					uiDispatch={uiDispatch}
					shipping={shipping}
					dispatchShipping={dispatchShipping}
					handleAddressChange={handleAddressChange}
				/>
			)}
			{uiState.body === 3 && (
				<Body3
					uiState={uiState}
					handlePaymentChange={handlePaymentChange}
				/>
			)}
			<Button
				uiState={uiState}
				uiDispatch={uiDispatch}>
				Continue
			</Button>
		</div>
	);
};

export default Body;
