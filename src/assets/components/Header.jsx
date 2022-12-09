import React from 'react';
import { PreviewOrder } from '../css/styled';
import images from '../images/index_images';

const Header = (props) => {
	const { children } = props;

	return (
		<PreviewOrder>
			<img
				src={images.close}
				alt='Close order'
			/>
			<span>{children}</span>
		</PreviewOrder>
	);
};

export default Header;
