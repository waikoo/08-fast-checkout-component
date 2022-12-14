export const uiReducer = (uiState, action) => {
	switch (action.type) {
		case 'nextBody':
			return {
				...uiState,
				body: uiState.body + 1,
				completedSteps: [...uiState.completedSteps, uiState.body]
			};
		case 'addressIsEdited':
			return {
				...uiState,
				isEditingAddress: true
			};
		case 'closeAddressEditor':
			return {
				...uiState,
				isEditingAddress: false
			};

		default:
			return uiState;
	}
};

export const INITIAL_UI_STATE = {
	body: 1,
	isEditingAddress: false,
	isCurrentCompleted: false,
	addNewAddress: false,
	completedSteps: []
};
