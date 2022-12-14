import React, { useRef } from 'react';
import { SBody1 } from '../../css/styled';
import useChecked from '../../hooks/useChecked';
import { body3 } from '../../radioInputs';
import InputLabel from '../Input';

const Body3 = (props) => {
	const { handlePaymentChange } = props;

	const [isChecked, setCheckedValue] = useChecked('credit');

	const creditRef = useRef(null);
	const cashRef = useRef(null);

	const onChange = (e) => {
		setCheckedValue(e);
		handlePaymentChange(e);
	};

	return (
		<SBody1>
			{body3.map((input) => (
				<InputLabel
					key={input.id}
					htmlFor={input.value}
					inputRef={input.value === 'credit' ? creditRef : cashRef}
					type={input.type}
					name={input.name}
					payment={input.payment}
					value={input.value}
					onChange={onChange}
					checked={isChecked(input.value)}>
					{input.value === 'credit' ? 'Credit Card' : 'Cash on delivery'}
				</InputLabel>
			))}
		</SBody1>
	);
};

export default Body3;
