import React from 'react';
import { SHeader, EditAddress } from '../css/styled';
import images from '../images/index_images';
import { ACTION } from '../uiReducer';

const Header = (props) => {
	const { showEditAddress, uiDispatch, uiState } = props;

	const goBack = () => {
		uiState.isEditingAddress ? uiDispatch({ type: ACTION.HAS_FINISHED_EDITING_ADDRESS }) : uiDispatch({ type: ACTION.HAS_FINISHED_ADDING_NEW_ADDRESS });
	};

	return (
		<>
			{showEditAddress ? (
				<EditAddress>
					<img
						src={images.back}
						alt='Go back'
						onClick={goBack}
					/>
					<span id='span'>Edit Address</span>
				</EditAddress>
			) : (
				<SHeader>
					<img
						src={images.close}
						alt={'Close checkout'}
					/>
					<span id='span'>PREVIEW ORDER</span>
				</SHeader>
			)}
		</>
	);
};

export default Header;
