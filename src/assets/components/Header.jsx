import React from 'react';
import images from '../images/index_images';

const Header = (props) => {
	const { showEditAddress } = props;

	return (
		<>
			<img
				src={showEditAddress ? images.back : images.close}
				alt='Close order'
			/>
			<span id='span'>{showEditAddress ? 'Edit Address' : 'PREVIEW ORDER'}</span>
		</>
	);
};

export default Header;
