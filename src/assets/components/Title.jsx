import React from 'react';
import { STitle } from '../css/styled';

const Title = (props) => {
	const { children } = props;
	return <STitle>{children}</STitle>;
};

export default Title;
