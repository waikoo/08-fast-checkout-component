export default [
	{
		id: 1,
		name: 'name',
		state: 'name',
		type: 'text',
		span: 'Name',
		spellCheck: 'false',
		required: true
	},
	{
		id: 2,
		name: 'street-nr',
		state: 'streetAndNumber',
		type: 'text',
		span: 'Street, Nr.',
		spellCheck: 'false',
		required: true,
		errorMessage: ''
	},
	{
		id: 3,
		name: 'postal-code',
		state: 'postalCode',
		type: 'number',
		span: 'Postal Code',
		spellCheck: 'false',
		required: true,
		errorMessage: ''
	},
	{
		id: 4,
		name: 'town',
		state: 'town',
		type: 'text',
		span: 'Town',
		spellCheck: 'false',
		required: true,
		errorMessage: ''
	},
	{
		id: 5,
		name: 'country',
		state: 'country',
		type: 'text',
		span: 'Country',
		spellCheck: 'false',
		required: true,
		errorMessage: ''
	},
	{
		id: 6,
		name: 'phone',
		state: 'phone',
		type: 'tel',
		span: 'Phone',
		spellCheck: 'false',
		required: true,
		errorMessage: ''
	},
	{
		id: 7,
		name: 'email',
		state: 'email',
		type: 'email',
		span: 'Email',
		spellCheck: 'false',
		required: true,
		errorMessage: ''
	}
];
