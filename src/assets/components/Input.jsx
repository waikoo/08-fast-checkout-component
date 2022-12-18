import React, { useEffect, useRef } from 'react';
import { SAddressContainer, SSummaryCon } from '../css/styled';
import useGetAddress from '../hooks/useGetAddress';
import images from '../images/index_images';
import newAddressInputData from '../newAddressInputData';
import { ACTION } from '../uiReducer';

const InputLabel = (props) => {
	const {
		onClick,
		inputRef,
		type,
		name,
		value,
		onChange,
		children,
		checked,
		method,
		payment,
		savedAddress,
		isPrevAddress,
		id,
		savedId,
		setCheckedValue,
		savedAddresses,
		dispatchShipping,
		uiDispatch,
		uiState,
		someRef,
		shipping,
		isSummary,
		shippingTitle,
		methodTitle,
		methodBody,
		paymentBody,
		paymentTitle,
		renderMethod,
		renderAddress,
		renderPayment,
		renderCart,
		editFromSummary
	} = props;
	// if (inputRef.value === 'home') inputRef.target.checked = true;

	if (!isSummary && !isPrevAddress) {
		console.log(payment);
		console.log(value);
	}

	const findIdToModifyState = (targetId) => {
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
		uiDispatch({ type: ACTION.IS_EDITING_ADDRESS });
		uiDispatch({ type: ACTION.HIDE_PROGRESS_BAR });
	};

	const selectShippingAddress = (e) => {
		const addressId = +e.target.id.slice(-1);
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

			{isSummary && !isPrevAddress && renderMethod ? (
				<div className='group'>
					<h2>{methodTitle}</h2>
					<div className='sum'>
						<span>{methodBody}</span>
					</div>
					<img
						// data-id={shipping.address.id}
						src={images.edit_section}
						alt='Edit shipping address'
						onClick={(e) => editFromSummary(e)}
						data-step={1}
					/>
				</div>
			) : null}

			{isSummary && !isPrevAddress && renderAddress ? (
				<div className='group'>
					<h2>{shippingTitle}</h2>
					<div className='sum'>
						<div className='oldsum'>
							{newAddressInputData.map((obj) => {
								for (const [key, value] of Object.entries(shipping.address)) {
									if (obj.state === key) {
										return (
											<div
												className='pairs'
												key={obj.span + value}>
												<span className='key'>
													{obj.span}: <span className='value'>{value}</span>
												</span>
											</div>
										);
									}
								}
							})}
						</div>
					</div>
					<img
						// data-id={shipping.address.id}
						src={images.edit_section}
						alt='Edit shipping address'
						onClick={(e) => editFromSummary(e)}
						data-step={2}
					/>
				</div>
			) : null}

			{isSummary && !isPrevAddress && renderPayment ? (
				<div className='group'>
					<h2>{paymentTitle}</h2>
					<div className='sum'>
						<span>{paymentBody}</span>
					</div>
					<img
						// data-id={shipping.address.id}
						src={images.edit_section}
						alt='Edit shipping address'
						onClick={(e) => editFromSummary(e)}
						data-step={3}
					/>
				</div>
			) : null}
		</div>
	);
};

export default InputLabel;
