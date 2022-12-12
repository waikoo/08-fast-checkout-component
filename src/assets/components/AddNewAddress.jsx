import React from 'react';
import images from '../images/index_images';

const AddNewAddress = (props) => {
	const { uiDispatch } = props;

	const showNewAddressForm = () => {
		uiDispatch({ type: 'addressIsEdited' });
	};

	return (
		<>
			<div
				className='new-address'
				onClick={showNewAddressForm}>
				<span>Add new address</span>
				<img
					src={images.plus}
					alt='Add new address'
				/>
			</div>
			<hr />
		</>
	);
};

export default AddNewAddress;
