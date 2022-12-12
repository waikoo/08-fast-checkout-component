import React from 'react';
import { useState } from 'react';
import { SButton } from '../css/styled';

const Button = (props) => {
	const { children, uiState, uiDispatch, form, showError, setShowError, shipping, areAllFieldsCompleted, dispatchShipping, setShowStoredAddress } = props;

	const submitHandler = () => {
		uiDispatch({ type: 'nextBody' });
	};

	const submitNewAddress = () => {
		if (!areAllFieldsCompleted()) setShowError(true);
		else {
			dispatchShipping({ type: 'STORE_ADDRESS' });
			setShowError(false);
			uiDispatch({ type: 'closeAddressEditor' });
			setShowStoredAddress(true);
		}
	};

	if (children === 'Continue') return <SButton onClick={submitHandler}>{children}</SButton>;
	if (children === 'Save') return <SButton onClick={submitNewAddress}>{children}</SButton>;
	if (children === 'Confirm Order') return <SButton>{children}</SButton>;
};

export default Button;
