import React from 'react';
import { useState } from 'react';
import { SButton } from '../css/styled';
import useGetAddress from '../hooks/useGetAddress';
import useSetAddress from '../hooks/useSetAddress';
import { ACTION } from '../uiReducer';

const Button = (props) => {
	const { children, uiState, uiDispatch, form, showError, setShowError, shipping, areAllFieldsCompleted, dispatchShipping } = props;

	const savedAddresses = useGetAddress('savedAddresses');

	const submitHandler = () => {
		uiDispatch({ type: ACTION.NEXT_BODY });
	};

	const submitNewAddress = () => {
		if (!areAllFieldsCompleted() && !uiState.isEditingAddress) setShowError(true);
		else if (uiState.isEditingAddress) {
			uiDispatch({ type: ACTION.UPDATE_ID_OF_ADDRESS_BEING_EDITED, payload: { value: null } });
			uiDispatch({ type: ACTION.HAS_FINISHED_EDITING_ADDRESS });

			const updatedAddresses = savedAddresses.map((savedAddress) => {
				savedAddress.id === uiState.idOfAddressBeingEdited ? { ...savedAddress, ...shipping.address } : savedAddress;
			});
			useSetAddress('savedAddresses', updatedAddresses, true);
		} else {
			dispatchShipping({ type: 'INCREMENT_ADDRESS_ID' });
			useSetAddress('savedAddresses', shipping.address);
			setShowError(false);
			uiDispatch({ type: ACTION.HAS_FINISHED_ADDING_NEW_ADDRESS });
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
