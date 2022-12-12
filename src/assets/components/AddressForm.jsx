import React from 'react';
import { SNewAddress, EditAddress, SForm } from '../css/styled';
import Form from './Form';
import Header from './Header';
import Title from './Title';

const AddressForm = (props) => {
	const { step, uiState, uiDispatch, shipping, handleAddressChange } = props;

	return (
		<SNewAddress>
			<EditAddress>
				<Header showEditAddress />
			</EditAddress>
			<Title step={step} />
			<Form
				uiState={uiState}
				uiDispatch={uiDispatch}
				shipping={shipping}
				handleAddressChange={handleAddressChange}
			/>
		</SNewAddress>
	);
};

export default AddressForm;
