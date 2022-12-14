import React, { useState } from 'react';
import { SAddressContainer, SBody2 } from '../../css/styled';
import useGetAddress from '../../hooks/useGetAddress';
import images from '../../images/index_images';
import AddNewAddress from '../AddNewAddress';
import AddressForm from '../AddressForm';
import ExistingAddress from '../ExistingAddress';

const Body2 = (props) => {
	const { uiState, uiDispatch, shipping, step, handleAddressChange, dispatchShipping } = props;

	const [showStoredAddress, setShowStoredAddress] = useState(false);

	const areAllFieldsCompleted = () => {
		return Object.values(shipping.address).every(Boolean);
	};

	const savedAddresses = useGetAddress('savedAddresses');
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
						savedAddresses.length > 0 &&
						savedAddresses.map((savedAddress) => {
							return (
								<ExistingAddress
									key={savedAddress.id}
									savedAddress={savedAddress}
								/>
							);
						})}

					<AddNewAddress uiDispatch={uiDispatch} />
				</>
			)}
		</SBody2>
	);
};

export default Body2;
