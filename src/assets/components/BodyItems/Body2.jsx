import React, { useRef } from 'react';
import { SBody2 } from '../../css/styled';
import useChecked from '../../hooks/useChecked';
import useGetAddress from '../../hooks/useGetAddress';
import AddNewAddress from '../AddNewAddress';
import AddressForm from '../AddressForm';
import InputLabel from '../Input';

const Body2 = (props) => {
	const { uiState, uiDispatch, shipping, step, handleAddressChange, dispatchShipping } = props;

	const [isChecked, setCheckedValue] = useChecked('address1');

	const savedAddresses = useGetAddress('savedAddresses');
	console.table(savedAddresses);

	const onChange = (e) => {
		setCheckedValue(e);
	};

	const areAllFieldsCompleted = () => {
		return Object.values(shipping.address).every(Boolean);
	};

	const someRef = useRef(null);
	return (
		<SBody2>
			{uiState.addNewAddress || uiState.isEditingAddress ? (
				<AddressForm
					uiState={uiState}
					uiDispatch={uiDispatch}
					shipping={shipping}
					step={step}
					handleAddressChange={handleAddressChange}
					areAllFieldsCompleted={areAllFieldsCompleted}
					dispatchShipping={dispatchShipping}
				/>
			) : (
				<>
					{savedAddresses?.length > 0 &&
						savedAddresses.map((savedAddress) => {
							return (
								<InputLabel
									someRef={someRef}
									uiDispatch={uiDispatch}
									isPrevAddress={true}
									isSummary={false}
									key={savedAddress?.id + 100}
									htmlFor={savedAddress?.name + savedAddress?.id}
									type='radio'
									name='savedAddress'
									value={'address' + savedAddress?.id}
									savedId={`savedAddress${savedAddress?.id}`}
									savedAddress={savedAddress}
									onChange={onChange}
									checked={isChecked('address' + savedAddress?.id)}
									setCheckedValue={setCheckedValue}
									savedAddresses={savedAddresses}
									dispatchShipping={dispatchShipping}
									shipping={shipping}
									uiState={uiState}></InputLabel>
							);
						})}

					<AddNewAddress
						uiState={uiState}
						uiDispatch={uiDispatch}
						shipping={shipping}
						dispatchShipping={dispatchShipping}
					/>
				</>
			)}
		</SBody2>
	);
};

export default Body2;
