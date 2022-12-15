import React from 'react';
import { SBody2 } from '../../css/styled';
import useChecked from '../../hooks/useChecked';
import useGetAddress from '../../hooks/useGetAddress';
import AddNewAddress from '../AddNewAddress';
import AddressForm from '../AddressForm';
import InputLabel from '../Input';

const Body2 = (props) => {
	const { uiState, uiDispatch, shipping, step, handleAddressChange, dispatchShipping } = props;

	const [isChecked, setCheckedValue, toggleChecked] = useChecked('address1');

	const savedAddresses = useGetAddress('savedAddresses');

	// const onChange = (e) => {};

	const areAllFieldsCompleted = () => {
		return Object.values(shipping.address).every(Boolean);
	};

	// console.table(shipping);
	// console.table(shipping.address);

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
				/>
			) : (
				<>
					{savedAddresses?.length > 0 &&
						savedAddresses.map((savedAddress) => {
							return (
								<InputLabel
									isPrevAddress={true}
									key={savedAddress.id + 100}
									htmlFor={savedAddress.name + savedAddress.id}
									type='radio'
									name='savedAddress'
									value={'address' + savedAddress.id}
									savedId={`savedAddress${savedAddress.id}`}
									savedAddress={savedAddress}
									onChange={setCheckedValue}
									checked={isChecked('address' + savedAddress.id)}
									setCheckedValue={setCheckedValue}
									toggleChecked={toggleChecked}
									savedAddresses={savedAddresses}
									dispatchShipping={dispatchShipping}></InputLabel>
							);
						})}

					<AddNewAddress uiDispatch={uiDispatch} />
				</>
			)}
		</SBody2>
	);
};

export default Body2;
