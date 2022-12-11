import React, { useState } from 'react';
import { SBody2 } from '../../css/styled';
import images from '../../images/index_images';
import AddressForm from '../AddressForm';

const Body2 = (props) => {
	const [showModal, setShowModal] = useState(false);
	const { uiState, uiDispatch, shipping, dispatchShipping, step } = props;
	const showNewAddressForm = () => {
		uiDispatch({ type: 'addressIsEdited' });
		setShowModal(true);
		// ! setShowModal(false) on button click when form is done
	};

	return (
		<SBody2 onClick={showNewAddressForm}>
			{showModal ? (
				<AddressForm
					uiState={uiState}
					uiDispatch={uiDispatch}
					shipping={shipping}
					dispatchShipping={dispatchShipping}
					step={step}
				/>
			) : (
				<>
					<div className='new-address'>
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
