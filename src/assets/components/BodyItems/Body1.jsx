import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { SBody1 } from '../../css/styled';
import { body1 } from '../../radioInputs';
import InputLabel from '../Input';

const Body1 = (props) => {
	const { handleMethodChange } = props;

	const [checked, setChecked] = useState('home');

	const homeRef = useRef(null);
	const storeRef = useRef(null);

	const onChange = (e) => {
		setChecked(e.target.value);
		handleMethodChange(e);
	};

	const isChecked = (value) => value === checked;

	return (
		<SBody1>
			{body1.map((input) => (
				<InputLabel
					key={input.id}
					htmlFor={input.value}
					inputRef={input.value === 'home' ? homeRef : storeRef}
					type={input.type}
					name={input.name}
					method={input.method}
					value={input.value}
					onChange={onChange}
					checked={isChecked(input.value)}>
					{input.value === 'home' ? 'Home delivery' : 'Collect from store'}
				</InputLabel>
			))}
		</SBody1>
	);
};

export default Body1;
