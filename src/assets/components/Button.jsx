import React from 'react';
import { useState } from 'react';
import { SButton } from '../css/styled';
import useSetAddress from '../hooks/useSetAddress';
import { ACTION } from '../uiReducer';

const Button = (props) => {
	const { children, uiState, uiDispatch, form, showError, setShowError, shipping, areAllFieldsCompleted, dispatchShipping, setShowStoredAddress } = props;

	const submitHandler = () => {
		uiDispatch({ type: ACTION.NEXT_BODY });
	};

	const submitNewAddress = () => {
		if (!areAllFieldsCompleted() && !uiState.isEditingAddress) setShowError(true);
		else if (uiState.isEditingAddress) {
			// map through stored addresses, id of map === being edited
			// overwrite local array, save into localStorage
		} else {
			dispatchShipping({ type: 'INCREMENT_ADDRESS_ID' });
			useSetAddress('savedAddresses', shipping.address);
			setShowError(false);
			uiDispatch({ type: ACTION.HAS_FINISHED_ADDING_NEW_ADDRESS });
			// setShowStoredAddress(true);
		}
	};

	if (children === 'Continue') return <SButton onClick={submitHandler}>{children}</SButton>;

	if (children === 'Save')
		return (
			<SButton
				onClick={submitNewAddress}
				style={{ marginTop: '2rem' }}>
				{children}
			</SButton>
		);

	if (children === 'Confirm Order') return <SButton>{children}</SButton>;
};

export default Button;
