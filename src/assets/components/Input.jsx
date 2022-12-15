import React from 'react';
import { SAddressContainer } from '../css/styled';
import images from '../images/index_images';
import newAddressInputData from '../newAddressInputData';

const InputLabel = (props) => {
	const { onClick, inputRef, type, name, value, onChange, children, checked, method, payment, savedAddress, isPrevAddress, id, savedId, setCheckedValue, savedAddresses, dispatchShipping } = props;
	// if (inputRef.value === 'home') inputRef.target.checked = true;
	const editAddressHandler = () => {
		// TODO:
		// brings form out
		// filters the savedAddress objects' ids to match the clicked img's id, when match:
		// fills out input fields with the values saved in localStorage from matching object
		// clicking save stores the edited address in the matching object
	};

	const selectShippingAddress = (e) => {
		setCheckedValue(e);
		const id = e.target.id;
		const targetId = Number(id[id.length - 1]);
		const selectedAddress = savedAddresses.find((address) => address.id === targetId);
		if (selectedAddress) {
			for (const [key, value] of Object.entries(selectedAddress)) {
				dispatchShipping({ type: 'CHANGE_ADDRESS', payload: { state: key, value: value } });
			}
		}
	};

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
						checked={checked === true} // convert string to boolean
					/>
				</label>
			)}

			{isPrevAddress && (
				<SAddressContainer>
					<label
						className='existing-address'
						onClick={selectShippingAddress}>
						{newAddressInputData.map((input) => {
							return (
								<div key={input.state}>
									<input
										type='radio'
										name={name}
										value={value}
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
						})}
					</label>
				</SAddressContainer>
			)}
		</div>
	);
};

export default InputLabel;
