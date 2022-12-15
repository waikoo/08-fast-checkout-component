import React from 'react';
import { SHeader } from '../css/styled';
import images from '../images/index_images';
import { ACTION } from '../uiReducer';

const Header = (props) => {
	const { showEditAddress, uiDispatch } = props;

	const goBack = () => {
		uiDispatch({ type: ACTION.IS_FINISHED_ADDING_NEW_ADDRESS });
	};

	return (
		<SHeader>
			{showEditAddress ? (
				<>
					<img
						src={images.back}
						alt='Go back'
						onClick={goBack}
					/>
					<span id='span'>Edit Address</span>
				</>
			) : (
				<>
					<img
						src={images.close}
						alt={'Close checkout'}
					/>
					<span id='span'>PREVIEW ORDER</span>
				</>
			)}
		</SHeader>
	);
};

export default Header;
