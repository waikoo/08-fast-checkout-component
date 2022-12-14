export const INITIAL_STATE = {
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
	payment: '',
	stored: []
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
		case 'STORE_ADDRESS':
			return {
				...shipping,
				address: {
					...shipping.address
				},
				stored: [...shipping.stored, Object.assign({}, shipping.address)]
			};
		case 'CHANGE_PAYMENT':
			return {
				...shipping,
				address: {
					...shipping.address
				},
				stored: [...shipping.stored],
				// method: shipping.method,
				[action.payload.name]: action.payload.value
			};
		default:
			throw new Error('you messed up');
	}
};
