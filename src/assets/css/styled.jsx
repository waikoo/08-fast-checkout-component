import styled from 'styled-components';
import colors from './colors';
import fonts from './fonts';

const PreviewOrder = styled.header`
	background: black;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	color: white;
	position: relative;
	padding: 0.8rem;
	font-weight: ${fonts.weight.medium};
	font-size: ${fonts.size['18']};

	span {
		position: absolute;
		width: 100%;
		text-align: center;
	}
`;

const SButton = styled.a`
	background: black;
	color: white;
	display: grid;
	place-items: center;
	cursor: pointer;
	width: 100%;
	margin: 0 auto;
	padding: 0.8rem;
	font-size: ${fonts.size['23']};
	font-weight: ${fonts.weight.medium};

	&:hover {
		background: #f3c11b;
		color: black;
		border: 3px solid black;
	}
`;

const Line = styled.div`
	height: 1px;
	background: black;
	width: 30%;
`;

const SProgressBar = styled.div`
	display: flex;
	align-items: center;
	width: 80%;
	margin: 2rem auto;
`;

const SProgressItem = styled.section`
	.top {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.circle {
		border-radius: 50%;
		width: 25px;
		height: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: ${colors.progressItem.bg};
	}
`;

const STitle = styled.h1`
	text-align: center;
	font-size: ${fonts.size['14']};
	font-weight: ${fonts.weight.bold};
`;

const SBody1 = styled.div`
	.con {
	}

	input {
		font-weight: ${fonts.weight.medium};
		font-size: ${fonts.weight['14']};
	}

	input:checked {
		font-weight: ${fonts.weight.bold};
	}
`;

export { SButton, PreviewOrder, Line, SProgressBar, SProgressItem, STitle, SBody1 };
