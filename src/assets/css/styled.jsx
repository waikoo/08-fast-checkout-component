import styled from 'styled-components';
import colors from './colors';
import fonts from './fonts';
import images from '../images/index_images';

export const SHeader = styled.header`
	background: black;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	color: white;
	position: relative;
	padding: 0.8rem;
	font-weight: ${fonts.weight.medium};
	font-size: ${fonts.size['18']};
	width: 100%;

	span {
		position: absolute;
		width: 100%;
		text-align: center;
		z-index: 0;
	}
`;

export const EditAddress = styled(SHeader)`
	text-transform: capitalize;
	#span {
		left: -1rem;
		font-weight: ${fonts.weight.medium};
	}

	img {
		position: relative;
		z-index: 2;
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
		margin-top: 1rem;
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

export const SAddressContainer = styled.div`
	margin-top: 1rem;
	position: relative;
	padding: 0 1rem 1rem;
	background: ${colors.summary.bg};

	&:focus-within {
	}
	&:focus-within {
		border: 3px solid black;
		box-sizing: content-box;
	}

	img {
		position: absolute;
		bottom: -1rem;
		right: -1rem;
		padding: 1rem;
	}

	.value {
		font-weight: ${fonts.weight.regular};
	}

	.existing-address {
		padding-bottom: 0.3rem;
		padding-left: 1rem;
		position: relative;
	}

	input {
		position: absolute;
		left: -10px;
		top: 21px;
	}

	input[type='radio']:checked {
		accent-color: black;
	}
	/*
	div:has(label:has(div:has(input[type='radio']))):checked {
		border: 3px solid black;
		box-sizing: content-box;
	} */
`;

export const SCartItem = styled.div`
	display: flex;
	padding: 1rem;

	.cart-info {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding-left: 1rem;
	}

	.cart-info-left,
	.cart-info-right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.cart-info-right {
		align-items: flex-end;
	}
`;
