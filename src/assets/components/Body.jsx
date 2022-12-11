import React, { useReducer } from 'react';
import Body1 from './BodyItems/Body1';
import Body2 from './BodyItems/Body2';
import Button from './Button';

const reducer = (shipping, action) => {
	switch (action.type) {
		case 'updateMethod':
			return {
				...shipping,
				method: action.payload
			};
		case 'updateName':
			return {
				...shipping,
				address: {
					...shipping.address,
					name: action.payload
				}
			};
		case 'updateStreetAndNumber':
			return {
				...shipping,
				address: {
					...shipping.address,
					streetAndNumber: action.payload
				}
			};
		case 'updatePostalCode':
			return {
				...shipping,
				address: {
					...shipping.address,
					postalCode: action.payload
				}
			};
		case 'updateTown':
			return {
				...shipping,
				address: {
					...shipping.address,
					town: action.payload
				}
			};
		case 'updateCountry':
			return {
				...shipping,
				address: {
					...shipping.address,
					country: action.payload
				}
			};
		case 'updatePhone':
			return {
				...shipping,
				address: {
					...shipping.address,
					phone: action.payload
				}
			};
		case 'updateEmail':
			return {
				...shipping,
				address: {
					...shipping.address,
					email: action.payload
				}
			};

		default:
			throw new Error('you messed up');
	}
};

const Body = (props) => {
	const { uiState, step, uiDispatch } = props;
	const [shipping, dispatchShipping] = useReducer(reducer, {
		method: 'home',
		address: {
			name: '',
			streetAndNumber: '',
			postalCode: '',
			town: '',
			country: '',
			phone: '',
			email: ''
		},
		payment: ''
	});
	console.log(shipping.address.name);
	console.log(shipping.address.streetAndNumber);
	console.log(shipping.address.postalCode);
	return (
		<div>
			{uiState.body === 1 && (
				<Body1
					shipping={shipping}
					dispatchShipping={dispatchShipping}
				/>
			)}

			{uiState.body === 2 && (
				<Body2
					step={step}
					uiState={uiState}
					uiDispatch={uiDispatch}
					shipping={shipping}
					dispatchShipping={dispatchShipping}
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
