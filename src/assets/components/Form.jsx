import React from 'react';
import { SForm } from '../css/styled';
import AddressInput from './AddressInput';
import Button from './Button';
import inputData from '../../assets/newAddressInputData';

const Form = (props) => {
	const { uiState, uiDispatch, shipping, handleAddressChange } = props;
	console.log(shipping.name);
	const onSubmit = (e) => {
		e.preventDefault();
		uiDispatch({ type: 'closeAddressEditor' });
	};

	return (
		<SForm onSubmit={onSubmit}>
			<form>
				{inputData.map((input) => (
					<AddressInput
						key={input.id}
						value={shipping.address[input.state]}
						{...input}
						handleAddressChange={handleAddressChange}
					/>
				))}
				<Button uiDispatch={uiDispatch}>Save</Button>
			</form>
		</SForm>
	);
};

export default Form;
