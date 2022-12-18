import images from './assets/images/index_images';
import { GlobalStyles } from './assets/css/GlobalStyles';
import Header from './assets/components/Header';
import ProgressBar from './assets/components/ProgressBar';
import Title from './assets/components/Title';
import Body from './assets/components/Body';
import { uiReducer, INITIAL_UI_STATE, ACTION } from './assets/uiReducer';

import { useReducer } from 'react';

function App() {
	const [uiState, uiDispatch] = useReducer(uiReducer, INITIAL_UI_STATE);

	const editFromSummary = (e) => {
		let step;
		if (e?.target) step = +e.target.dataset.step;
		else step = e;
		uiDispatch({ type: ACTION.JUMP_TO_BODY, payload: { value: step } });
	};

	return (
		<div className='App'>
			<GlobalStyles />
			<Header showEditAddress={false} />
			<main>
				<ProgressBar
					uiState={uiState}
					editFromSummary={editFromSummary}
				/>
				<Title step={uiState.body}></Title>
				<Body
					step={uiState.body}
					uiState={uiState}
					uiDispatch={uiDispatch}
					editFromSummary={editFromSummary}
				/>
			</main>
		</div>
	);
}

export default App;
