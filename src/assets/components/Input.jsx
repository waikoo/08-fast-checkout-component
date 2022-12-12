import React from 'react';

const InputLabel = (props) => {
	const { onClick, inputRef, type, name, value, onChange, children, checked, method } = props;
	if (inputRef.value === 'home') inputRef.target.checked = true;
	return (
		<label
			htmlFor={value}
			onClick={onClick}
			ref={inputRef}>
			{children}
			<input
				type={type}
				name={name}
				data-method={method}
				value={value}
				id={value}
				onChange={onChange}
				checked={checked}
			/>
		</label>
	);
};

export default InputLabel;
