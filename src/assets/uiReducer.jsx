export const INITIAL_UI_STATE = {
	body: 1,
	isEditingAddress: false,
	isCurrentCompleted: false,
	addNewAddress: false,
	completedSteps: []
};

export const ACTION = {
	NEXT_BODY: 'nextBody',
	IS_ADDING_NEW_ADDRESS: 'isAddingNewAddress',
	IS_FINISHED_ADDING_NEW_ADDRESS: 'isFinishedAddingNewAdress'
};

export const uiReducer = (uiState, action) => {
	switch (action.type) {
		case ACTION.NEXT_BODY:
			return {
				...uiState,
				body: uiState.body + 1,
				completedSteps: [...uiState.completedSteps, uiState.body]
			};
		case ACTION.IS_ADDING_NEW_ADDRESS:
			return {
				...uiState,
				addNewAddress: true
			};
		case ACTION.IS_FINISHED_ADDING_NEW_ADDRESS:
			return {
				...uiState,
				addNewAddress: false
			};

		default:
			return uiState;
	}
};
