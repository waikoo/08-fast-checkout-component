import React from 'react';

const AddressInput = (props) => {
	const { name, state, type, span, spellCheck, required, value, handleAddressChange } = props;
	return (
		<>
			<label htmlFor='name'>
				<span>{span}</span>
				<input
					type={type}
					name={name}
					id={name}
					spellCheck={spellCheck}
					data-state={state}
					value={value}
					onChange={handleAddressChange}
					required={required}
				/>
			</label>
		</>
	);
};

export default AddressInput;
