import React, { useEffect, useRef } from 'react';

const AddressInput = (props) => {
	const { name, state, type, span, spellCheck, required, value, handleAddressChange, id } = props;

	const nameRef = useRef(null);

	useEffect(() => {
		if (nameRef && id === 1) nameRef.current.focus();
	}, [id]);

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
					ref={nameRef}
				/>
			</label>
		</>
	);
};

export default AddressInput;
