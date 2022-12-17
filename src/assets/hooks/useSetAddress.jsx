const useSetAddress = (key, newData, update = false) => {
	const storedData = JSON.parse(localStorage.getItem(key));
	const isArray = (arrayOrNotArray) => Array.isArray(arrayOrNotArray);
	const isObject = (objectOrNotObject) => typeof objectOrNotObject === 'object';

	if (!isArray(newData) && isObject(newData)) {
		if (isArray(storedData) && !update) {
			console.log(newData);
			console.log(newData.id);
			// ! needs to change
			newData.id !== storedData.length + 1 ? (newData.id = storedData.length + 1) : null;

			localStorage.setItem(key, JSON.stringify([...storedData, newData]));
		} else if (storedData === undefined || (storedData === null && !update)) {
			localStorage.setItem(key, JSON.stringify([newData]));
		}
	} else if (isArray(newData) && update) {
		localStorage.removeItem('savedAddresses');
		localStorage.setItem(key, JSON.stringify(newData));
	} else if (isObject(storedData)) {
		localStorage.setItem(key, JSON.stringify([storedData, newData]));
	}
};

export default useSetAddress;
