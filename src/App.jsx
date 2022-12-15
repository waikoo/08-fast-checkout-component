import images from './assets/images/index_images';
import { GlobalStyles } from './assets/css/GlobalStyles';
import Header from './assets/components/Header';
import ProgressBar from './assets/components/ProgressBar';
import Title from './assets/components/Title';
import Body from './assets/components/Body';
import { uiReducer, INITIAL_UI_STATE } from './assets/uiReducer';

import { useReducer } from 'react';

function App() {
	const [uiState, uiDispatch] = useReducer(uiReducer, INITIAL_UI_STATE);

	return (
		<div className='App'>
			<GlobalStyles />
			<Header showEditAddress={false} />
			<main>
				<ProgressBar uiState={uiState} />
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
