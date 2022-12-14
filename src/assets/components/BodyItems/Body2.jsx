import React, { useState } from 'react';
import { SAddressContainer, SBody2 } from '../../css/styled';
import images from '../../images/index_images';
import AddNewAddress from '../AddNewAddress';
import AddressForm from '../AddressForm';
import ExistingAddress from '../ExistingAddress';

const Body2 = (props) => {
	const { uiState, uiDispatch, shipping, step, handleAddressChange, dispatchShipping } = props;
	console.log(Array.isArray(shipping.stored));

	const [showStoredAddress, setShowStoredAddress] = useState(false);

	const areAllFieldsCompleted = () => {
		return Object.values(shipping.address).every(Boolean);
	};

	return (
		<SBody2>
			{uiState.addNewAddress ? (
				<AddressForm
					uiState={uiState}
					uiDispatch={uiDispatch}
					shipping={shipping}
					step={step}
					handleAddressChange={handleAddressChange}
					areAllFieldsCompleted={areAllFieldsCompleted}
					dispatchShipping={dispatchShipping}
					setShowStoredAddress={setShowStoredAddress}
				/>
			) : (
				<>
					{showStoredAddress &&
						shipping.stored.length > 0 &&
						shipping.stored.map((storedAddress) => (
							<ExistingAddress
								key={Date.now()}
								storedAddress={storedAddress}
							/>
						))}

					<AddNewAddress uiDispatch={uiDispatch} />
				</>
			)}
		</SBody2>
	);
};

export default Body2;
