import images from './assets/images/index_images';
import styled from 'styled-components';
import { GlobalStyles } from './assets/css/GlobalStyles';
import Header from './assets/components/Header';
import ProgressBar from './assets/components/ProgressBar';
import Title from './assets/components/Title';
import Button from './assets/components/Button';
import Body from './assets/components/Body';

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<Header>PREVIEW ORDER</Header>
			<main>
				<ProgressBar />
				<Title>Shipping Method</Title>
				<Body></Body>
				<Button>Continue</Button>
			</main>
		</div>
	);
}

export default App;
