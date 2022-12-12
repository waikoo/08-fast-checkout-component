import React from 'react';
import { SButton } from '../css/styled';

const Button = (props) => {
	const { children, uiState, uiDispatch } = props;

	// uiDispatch - continue
	const submitHandler = () => {
		uiDispatch({ type: 'nextBody' });
	};

	const submitNewAddress = () => uiDispatch({ type: 'closeAddressEditor' });

	if (children === 'Continue') return <SButton onClick={submitHandler}>{children}</SButton>;
	if (children === 'Save') return <SButton type='submit'>{children}</SButton>;
	// ! works on click, not on submit:
	// if (children === 'Save') return <SButton onClick={submitNewAddress}>{children}</SButton>;
	// ! ^
	if (children === 'Confirm Order') return <SButton>{children}</SButton>;
};

export default Button;

/*
  1., 2., 3. - Continue
  Edit Address - Save
  Summary - Confirm Order
*/
