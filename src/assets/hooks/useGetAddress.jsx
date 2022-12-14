const useGetAddress = (key) => {
	const getKey = (key) => JSON.parse(localStorage.getItem(key));
	return getKey(key) ? getKey(key) : null;
};

export default useGetAddress;
