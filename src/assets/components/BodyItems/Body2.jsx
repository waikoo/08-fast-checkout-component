import React from 'react';
import { SBody2 } from '../../css/styled';
import images from '../../images/index_images';
import AddressForm from '../AddressForm';

const Body2 = (props) => {
	const { uiState, uiDispatch, shipping, step, handleAddressChange } = props;
	const showNewAddressForm = () => {
		uiDispatch({ type: 'addressIsEdited' });
	};

	return (
		<SBody2>
			{uiState.isEditingAddress ? (
				<AddressForm
					uiState={uiState}
					uiDispatch={uiDispatch}
					shipping={shipping}
					step={step}
					handleAddressChange={handleAddressChange}
				/>
			) : (
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
			)}
		</SBody2>
	);
};

export default Body2;
