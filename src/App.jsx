import images from './assets/images/index_images';
import styled from 'styled-components';
import { GlobalStyles } from './assets/css/GlobalStyles';
import Header from './assets/components/Header';
import ProgressBar from './assets/components/ProgressBar';
import Title from './assets/components/Title';
import Button from './assets/components/Button';
import Body from './assets/components/Body';

import { useReducer } from 'react';
import { PreviewOrder } from './assets/css/styled';

const reducer = (uiState, action) => {
	switch (action.type) {
		case 'nextBody':
			return {
				...uiState,
				body: uiState.body + 1,
				completedSteps: [1]
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

function App() {
	const [uiState, uiDispatch] = useReducer(reducer, {
		body: 1,
		isEditingAddress: false,
		isCurrentCompleted: false,
		addNewAddress: false,
		completedSteps: []
	});

	return (
		<div className='App'>
			<GlobalStyles />
			<PreviewOrder>
				<Header />
			</PreviewOrder>
			<main>
				<ProgressBar
					completedSteps={uiState.completedSteps}
					isEditingAddress={uiState.isEditingAddress}
				/>
				<Title step={uiState.body}></Title>
				<Body
					step={uiState.body}
					uiState={uiState}
					uiDispatch={uiDispatch}></Body>
			</main>
		</div>
	);
}

export default App;
