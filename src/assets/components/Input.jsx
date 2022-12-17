import React, { useEffect, useRef } from 'react';
import { SAddressContainer } from '../css/styled';
import useGetAddress from '../hooks/useGetAddress';
import images from '../images/index_images';
import newAddressInputData from '../newAddressInputData';
import { ACTION } from '../uiReducer';

const InputLabel = (props) => {
	const { onClick, inputRef, type, name, value, onChange, children, checked, method, payment, savedAddress, isPrevAddress, id, savedId, setCheckedValue, savedAddresses, dispatchShipping, uiDispatch, uiState, someRef, shipping, isSummary, summaryTitle } = props;
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
		uiDispatch({ type: ACTION.UPDATE_ID_OF_ADDRESS_BEING_EDITED, payload: { value: +e.target.dataset.id } });
		findIdToModifyState(+e.target.dataset.id);
		// ! TEST:
		setCheckedValue(e);
		// ? same behavior as when clicking it before editing it?
		// ! ^ END TEST
		uiDispatch({ type: ACTION.IS_EDITING_ADDRESS });
		uiDispatch({ type: ACTION.HIDE_PROGRESS_BAR });
		// console.log(+e.target.dataset.id);
		// uiDispatch({ type: ACTION.UPDATE_ID_OF_ADDRESS_BEING_EDITED, payload: { value: +e.target.dataset.id } });
		// on clicking the edit button, it should also use the container's id to update state to the id of the address being edited

		// ? WILL IT WORK?

		// ! TAKING THIS OUT:
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
		const addressId = +e.target.id.slice(-1);
		// console.warn(typeof addressId, addressId);
		// uiDispatch({ type: ACTION.UPDATE_ID_OF_ADDRESS_BEING_EDITED, payload: { value: addressId } });
		setCheckedValue(e);
		findIdToModifyState(addressId);
	};

	if (isPrevAddress) useEffect(() => someRef.current?.click(), []);

	return (
		<div>
			{!isPrevAddress && !isSummary ? (
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
			) : null}

			{isPrevAddress && !isSummary ? (
				<SAddressContainer>
					<label
						className='existing-address'
						onClick={selectShippingAddress}
						ref={isPrevAddress && value === 'address1' ? someRef : null}>
						{newAddressInputData.map((input) => {
							if (input) {
								return (
									<div key={input.state + 10}>
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
												{input.span}: <span className='value'>{savedAddress[input.state]}</span>
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
							}
						})}
					</label>
				</SAddressContainer>
			) : null}

			{isSummary && !isPrevAddress ? (
				<div>
					<span>{summaryTitle}</span>;
					{Object.entries(shipping.address).map(([key, value]) => {
						console.log(key, value);
						return newAddressInputData.map((input) => {
							console.log(+value);
							console.log(input.id);
							if (+value === input.id) {
								return (
									<div key={input.state + 10}>
										<div className='lil-div'>
											<span className='key'>
												{input.span}: <span className='value'>{value}</span>
											</span>
											<img
												data-id={input.id}
												onClick={editAddressHandler}
												src={images.edit_section}
												alt='Edit address'
											/>
										</div>
									</div>
								);
							}
						});
					})}
				</div>
			) : null}
		</div>
	);
};

export default InputLabel;
