const useSetAddress = (key, data) => {
	const oldData = JSON.parse(localStorage.getItem(key));

	if (!Array.isArray(data) && typeof data === 'object') {
		if (Array.isArray(oldData)) {
			data.id !== oldData.length + 1 ? (data.id = oldData.length + 1) : null;
			localStorage.setItem(key, JSON.stringify([...oldData, data]));
		} else if (oldData === undefined || oldData === null) {
			localStorage.setItem(key, JSON.stringify([data]));
		} else {
			console.warn('old data is not an array');
		}
	} else if (typeof oldData === 'object') {
		localStorage.setItem(key, JSON.stringify([oldData, data]));
	} else {
		console.warn('new data is not an object');
	}
};

export default useSetAddress;
