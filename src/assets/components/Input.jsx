import React, { useEffect, useRef } from 'react';
import { SAddressContainer } from '../css/styled';
import useGetAddress from '../hooks/useGetAddress';
import images from '../images/index_images';
import newAddressInputData from '../newAddressInputData';
import { ACTION } from '../uiReducer';

const InputLabel = (props) => {
	const { onClick, inputRef, type, name, value, onChange, children, checked, method, payment, savedAddress, isPrevAddress, id, savedId, setCheckedValue, savedAddresses, dispatchShipping, uiDispatch, uiState, someRef, shipping } = props;
	// if (inputRef.value === 'home') inputRef.target.checked = true;

	const findIdToModifyState = (targetId) => {
		// ? CHANGES ONLY STATE - has to save to localStorage too

		const selectedAddress = savedAddresses.find((address) => address.id === targetId);
		if (selectedAddress) {
			for (const [key, value] of Object.entries(selectedAddress)) {
				console.warn("IT'S WORKING");
				dispatchShipping({ type: 'CHANGE_ADDRESS', payload: { state: key, value: value } });
			}
		}
	};

	const editAddressHandler = (e) => {
		// ! TEST:
		setCheckedValue(e);
		// ? same behavior as when clicking it before editing it?
		// ! ^ END TEST
		uiDispatch({ type: ACTION.IS_EDITING_ADDRESS });
		uiDispatch({ type: ACTION.HIDE_PROGRESS_BAR });
		findIdToModifyState(e.target.dataset.id);
		// on clicking the edit button, it should also use the container's id to update state to the id of the address being edited
		uiDispatch({ type: ACTION.UPDATE_ID_OF_ADDRESS_BEING_EDITED, payload: { value: +e.target.dataset.id } });

		// ? WILL IT WORK?

		if (uiState.idOfAddressBeingEdited !== shipping.address.id) {
			useGetAddress('savedAddresses').map((savedAddress) => {
				if (savedAddress.id === uiState.idOfAddressBeingEdited) {
					for (const [key, value] of Object.entries(savedAddress)) {
						dispatchShipping({ type: 'CHANGE_ADDRESS', payload: { state: key, value: value } });
					}
				}
			});
		}
	};

	// let clickedAddress = useRef(null)

	const selectShippingAddress = (e) => {
		console.log(e.target); // img
		console.log(e.currentTarget); // label
		console.log(+e.target.id[e.target.id.length - 1]);
		setCheckedValue(e);
		findIdToModifyState(+e.target.id[e.target.id.length - 1]);
	};

	if (isPrevAddress) useEffect(() => someRef.current?.click(), []);

	return (
		<div>
			{!isPrevAddress && (
				<label
					htmlFor={value}
					onClick={onClick}
					ref={inputRef}>
					{children}
					<input
						type={type}
						name={name}
						data-method={method}
						data-payment={payment}
						value={value}
						id={value}
						onChange={onChange}
						checked={checked === true}
					/>
				</label>
			)}

			{isPrevAddress && (
				<SAddressContainer>
					<label
						className='existing-address'
						onClick={selectShippingAddress}
						ref={isPrevAddress && value === 'address1' ? someRef : null}>
						{newAddressInputData.map((input) => {
							return (
								<div key={input.state}>
									<input
										type='radio'
										name={name}
										value={value}
										data-selected={id === 1}
										id={`${savedId}`}
										checked={checked === true}
										onChange={onChange}
									/>
									<div className='lil-div'>
										<span className='key'>
											{input?.span}: <span className='value'>{savedAddress[input?.state]}</span>
										</span>
										<img
											data-id={savedAddress.id}
											onClick={editAddressHandler}
											src={images.edit_section}
											alt='Edit address'
										/>
									</div>
								</div>
							);
						})}
					</label>
				</SAddressContainer>
			)}
		</div>
	);
};

export default InputLabel;
