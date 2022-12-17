import React from 'react';
import images from '../images/index_images';
import { ACTION } from '../uiReducer';

const AddNewAddress = (props) => {
	const { uiState, uiDispatch, dispatchShipping, shipping } = props;

	const showNewAddressForm = () => {
		uiDispatch({ type: ACTION.IS_ADDING_NEW_ADDRESS });
		uiDispatch({ type: ACTION.HIDE_PROGRESS_BAR });

		// if (uiState.addNewAddress)
		// 	for (const key of Object.keys(shipping.address)) {
		// 		if (key === 'id') return;
		// 		dispatchShipping({ type: 'CHANGE_ADDRESS', payload: { state: key, value: '' } });
		// 	}
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
