export const INITIAL_STATE = {
	method: 'home',
	address: {
		id: 1,
		name: '',
		streetAndNumber: '',
		postalCode: '',
		town: '',
		country: '',
		phone: '',
		email: ''
	},
	payment: ''
};

export const reducer = (shipping, action) => {
	switch (action.type) {
		case 'CHANGE_METHOD':
			return {
				...shipping,
				address: {
					...shipping.address
				},
				[action.payload.name]: action.payload.value
			};
		case 'CHANGE_ADDRESS':
			return {
				...shipping,
				address: {
					...shipping.address,
					[action.payload.state]: action.payload.value
				}
			};
		case 'INCREMENT_ADDRESS_ID':
			console.log('before updating: ' + shipping.address.id);
			return {
				...shipping,
				address: {
					...shipping.address,
					id: shipping.address.id ? shipping.address.id + 1 : 1
					// id: shipping.address.id + 1
				}
			};
		case 'CHANGE_PAYMENT':
			return {
				...shipping,
				address: {
					...shipping.address
				},
				[action.payload.name]: action.payload.value
			};
		default:
			throw new Error('you messed up');
	}
};
