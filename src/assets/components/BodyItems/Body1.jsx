import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { SBody1 } from '../../css/styled';
import InputLabel from '../Input';

const Body1 = (props) => {
	const { handleMethodChange } = props;

	const [checked, setChecked] = useState('home');

	const input = {
		type: 'radio',
		name: 'body1',
		method: 'method',
		homeRef: useRef(null),
		storeRef: useRef(null),
		value: { home: 'home', store: 'store' },
		onChange: (e) => {
			setChecked(e.target.value);
			handleMethodChange(e);
		}
	};

	const isChecked = (value) => value === checked;

	return (
		<SBody1>
			<InputLabel
				htmlFor={input.value.home}
				inputRef={input.homeRef}
				type={input.type}
				name={input.name}
				method={input.method}
				value={input.value.home}
				onChange={input.onChange}
				checked={isChecked('home')}>
				Home delivery
			</InputLabel>
			<InputLabel
				htmlFor={input.value.store}
				inputRef={input.storeRef}
				type={input.type}
				name={input.name}
				method={input.method}
				value={input.value.store}
				onChange={input.onChange}
				checked={isChecked('store')}>
				Collect from store
			</InputLabel>
		</SBody1>
	);
};

export default Body1;
