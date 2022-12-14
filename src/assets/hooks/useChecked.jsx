import { useState } from 'react';

const useChecked = (initialValue) => {
	const [checked, setChecked] = useState(initialValue);

	const isChecked = (value) => value === checked;

	const setCheckedValue = (e) => setChecked(e.target.value);

	return [isChecked, setCheckedValue];
};

export default useChecked;
