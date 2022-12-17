import React, { useRef } from 'react';
import { SBody1 } from '../../css/styled';
import { body1 } from '../../radioInputs';
import InputLabel from '../Input';
import useChecked from '../../hooks/useChecked';

const Body1 = (props) => {
	const { handleMethodChange } = props;

	const [isChecked, setCheckedValue] = useChecked('home');

	const homeRef = useRef(null);
	const storeRef = useRef(null);

	const onChange = (e) => {
		setCheckedValue(e);
		handleMethodChange(e);
	};

	return (
		<SBody1>
			{body1.map((input) => (
				<InputLabel
					isSummary={false}
					isPrevAddress={false}
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
