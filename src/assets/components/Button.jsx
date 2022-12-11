import React from 'react';
import { SButton } from '../css/styled';

const Button = (props) => {
	const { children, uiState, uiDispatch } = props;
	const submitHandler = () => {
		uiDispatch({ type: 'nextBody' });
	};
	return <SButton onClick={submitHandler}>{children}</SButton>;
};

export default Button;
