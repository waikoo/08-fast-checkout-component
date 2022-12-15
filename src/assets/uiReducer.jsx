export const INITIAL_UI_STATE = {
	body: 1,
	hideProgressBar: false,
	isEditingAddress: false,
	addNewAddress: false,
	completedSteps: []
};

export const ACTION = {
	NEXT_BODY: 'nextBody',
	IS_ADDING_NEW_ADDRESS: 'isAddingNewAddress',
	HAS_FINISHED_ADDING_NEW_ADDRESS: 'hasFinishedAddingNewAdress',
	IS_EDITING_ADDRESS: 'isEditingAddress',
	HAS_FINISHED_EDITING_ADDRESS: 'hasFinishedEditingAddress',
	SHOW_PROGRESS_BAR: 'showProgressBar',
	HIDE_PROGRESS_BAR: 'hideProgressBar'
};

export const uiReducer = (uiState, action) => {
	switch (action.type) {
		case ACTION.NEXT_BODY:
			return {
				...uiState,
				body: uiState.body + 1,
				completedSteps: [...uiState.completedSteps, uiState.body]
			};
		case ACTION.SHOW_PROGRESS_BAR:
			return {
				...uiState,
				hideProgressBar: false
			};
		case ACTION.HIDE_PROGRESS_BAR:
			return {
				...uiState,
				hideProgressBar: true
			};
		case ACTION.IS_ADDING_NEW_ADDRESS:
			return {
				...uiState,
				addNewAddress: true
			};
		case ACTION.HAS_FINISHED_ADDING_NEW_ADDRESS:
			return {
				...uiState,
				addNewAddress: false
			};
		case ACTION.IS_EDITING_ADDRESS:
			return {
				...uiState,
				isEditingAddress: true
			};
		case ACTION.HAS_FINISHED_EDITING_ADDRESS:
			return {
				...uiState,
				isEditingAddress: false
			};
		default:
			return uiState;
	}
};
