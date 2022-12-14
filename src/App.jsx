import images from './assets/images/index_images';
import styled from 'styled-components';
import { GlobalStyles } from './assets/css/GlobalStyles';
import Header from './assets/components/Header';
import ProgressBar from './assets/components/ProgressBar';
import Title from './assets/components/Title';
import Button from './assets/components/Button';
import Body from './assets/components/Body';
import { uiReducer, INITIAL_UI_STATE } from './assets/uiReducer';

import { useReducer } from 'react';
import { PreviewOrder } from './assets/css/styled';

function App() {
	const [uiState, uiDispatch] = useReducer(uiReducer, INITIAL_UI_STATE);

	console.table(uiState);

	return (
		<div className='App'>
			<GlobalStyles />
			<PreviewOrder>
				<Header />
			</PreviewOrder>
			<main>
				<ProgressBar
					completedSteps={uiState.completedSteps}
					addNewAddress={uiState.addNewAddress}
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
