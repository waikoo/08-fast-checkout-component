import { useEffect, useState } from 'react';

const useChecked = (initialValue) => {
	const [checked, setChecked] = useState(initialValue);

	useEffect(() => {
		setChecked(initialValue);
	}, []);

	const isChecked = (value) => value === checked;

	const setCheckedValue = (e) => {
		// console.dir(e.target.tagName === 'IMG');
		if (e.target.tagName === 'IMG') setChecked(e.target.closest('input'));
		else setChecked(e.target.value);
	};

	return [isChecked, setCheckedValue];
};

export default useChecked;
