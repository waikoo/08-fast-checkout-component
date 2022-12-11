import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { SBody1 } from '../../css/styled';
import InputLabel from '../Input';

const Body1 = (props) => {
	const { shipping, dispatchShipping } = props;

	const [checked, setChecked] = useState('home');

	const homeRef = useRef(null);
	const storeRef = useRef(null);

	const handleClick = (e) => {
		const ref = e.target === homeRef.current ? homeRef : storeRef;
		if (ref.current && ref.current.children) {
			dispatchShipping({ type: 'updateMethod', payload: ref.current.children[0].value });
		}
	};

	const input = {
		type: 'radio',
		name: 'body1',
		value: { home: 'home', store: 'store' },
		onChange: (e) => {
			setChecked(e.target.value);
			dispatchShipping({ type: 'updateMethod', payload: e.target.value });
		}
	};

	const isChecked = (value) => value === checked;

	return (
		<SBody1>
			<InputLabel
				htmlFor={input.value.home}
				onClick={handleClick}
				inputRef={homeRef}
				type={input.type}
				name={input.name}
				value={'home'}
				onChange={input.onChange}
				checked={isChecked('home')}>
				Home delivery
			</InputLabel>
			<InputLabel
				htmlFor={input.value.store}
				onClick={handleClick}
				inputRef={storeRef}
				type={input.type}
				name={input.name}
				value={'store'}
				onChange={input.onChange}
				checked={isChecked('store')}>
				Collect from store
			</InputLabel>
		</SBody1>
	);
};

export default Body1;
