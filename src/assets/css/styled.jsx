import styled from 'styled-components';
import colors from './colors';
import fonts from './fonts';
import images from '../images/index_images';

export const PreviewOrder = styled.header`
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

export const EditAddress = styled(PreviewOrder)`
	text-transform: capitalize;
	#span {
		left: -1rem;
		font-weight: ${fonts.weight.medium};
	}
`;

export const SButton = styled.a`
	background: black;
	color: white;
	display: grid;
	place-items: center;
	cursor: pointer;
	width: 90%;
	margin: 0 auto;
	padding: 0.8rem;
	font-size: ${fonts.size['23']};
	font-weight: ${fonts.weight.medium};
	margin-top: 5rem;
`;

export const Line = styled.div`
	height: 1px;
	background: black;
	width: 50px;
	position: relative;
	top: -10px;
	z-index: 6;
`;

export const SProgressBar = styled.div`
	display: flex;
	align-items: center;
	width: 80%;
	margin: 2rem auto;
`;

export const SProgressItem = styled.section`
	.top {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.circle {
		border-radius: 50%;
		width: 20px;
		height: 20px;
		display: grid;
		place-items: center;
		background: ${colors.progressItem.bg};
		font-size: ${fonts.size['12']};
		font-weight: ${fonts.weight.regular};

		span {
			transform: translateX(-0.5px);
		}
	}
`;

export const STitle = styled.h1`
	text-align: center;
	font-size: ${fonts.size['14']};
	font-weight: ${fonts.weight.bold};
	margin-top: ${({ lower }) => (lower ? '8rem' : null)};
`;

export const SBody1 = styled.div`
	margin-top: 1rem;

	input[type='radio'] {
		font-weight: ${fonts.weight.medium};
		font-size: ${fonts.weight['14']};
		accent-color: black;
		margin-right: 0.5rem;
	}

	label {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-direction: row-reverse;
		padding: 1.5rem 1rem;
	}

	label:focus-within,
	label:has(input:checked) {
		font-weight: ${fonts.weight.bold};
		background: ${colors.summary.bg};
	}
`;

export const SBody2 = styled.div`
	margin: 1.5rem;
	.new-address {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
	}

	span {
		margin-left: 1rem;
		font-weight: ${fonts.weight.bold};
		font-size: ${fonts.size['14']};
	}

	hr {
		margin-left: -1.5rem;
		width: 200%;
	}
`;

export const SNewAddress = styled.div`
	background: ${colors.summary.bg};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export const SForm = styled.div`
	padding: 1rem;

	.row {
		display: flex;
		flex-direction: row;
	}
	input {
		border: none;
		background: transparent;
		border-bottom: 1px solid black;
		width: 95%;
		transform: translateY(-0.8rem);
		transition: all 400ms ease-in-out;
		font-size: 1.5rem;
	}

	input[id='town'] {
		width: 90%;
	}
	input:focus {
		outline: none;
	}

	label {
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
	}

	label:has(input:focus) span,
	label:has(input:valid) span {
		transform: translateY(-1.5rem);
		transition: all 200ms ease-in-out;
		font-size: ${fonts.size['12']};
	}

	span {
		margin: 0;
		font-weight: ${fonts.weight.regular};
		transition: all 200ms ease-in-out;
	}
`;

export const SExistingAddress = styled.div`
	padding-bottom: 0.3rem;
	padding-left: 1rem;

	.value {
		font-weight: ${fonts.weight.regular};
	}
`;

export const SAddressContainer = styled.div`
	position: relative;
	padding: 1rem;
	background: ${colors.summary.bg};

	&:after {
		content: url(${images.edit_section});
		position: absolute;
		bottom: 20px;
		right: 20px;
	}
`;
