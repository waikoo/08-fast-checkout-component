import React, { useEffect, useRef, useState } from 'react';
import { SForm } from '../css/styled';
import AddressInput from './AddressInput';
import Button from './Button';
import inputData from '../../assets/newAddressInputData';

const Form = (props) => {
	const { uiState, uiDispatch, shipping, handleAddressChange, areAllFieldsCompleted, dispatchShipping } = props;

	const [showError, setShowError] = useState(false);
	const formRef = useRef(null);

	return (
		<SForm>
			<form ref={formRef}>
				{inputData
					.filter((item) => item.id === 1 || item.id === 2)
					.map((item) => (
						<AddressInput
							key={item.id}
							value={shipping.address[item.state]}
							{...item}
							handleAddressChange={handleAddressChange}
						/>
					))}

				<div className='row'>
					{inputData
						.filter((item) => item.id === 3 || item.id === 4)
						.map((item) => (
							<AddressInput
								key={item.id}
								value={shipping.address[item.state]}
								{...item}
								handleAddressChange={handleAddressChange}
							/>
						))}
				</div>

				{inputData
					.filter((item) => item.id >= 5)
					.map((item) => (
						<AddressInput
							key={item.id}
							value={shipping.address[item.state]}
							{...item}
							handleAddressChange={handleAddressChange}
						/>
					))}
				{showError && <span style={{ color: 'red' }}>Please fill out all fields.</span>}
				<Button
					form={formRef}
					uiDispatch={uiDispatch}
					uiState={uiState}
					setShowError={setShowError}
					showError={showError}
					shipping={shipping}
					areAllFieldsCompleted={areAllFieldsCompleted}
					dispatchShipping={dispatchShipping}>
					Save
				</Button>
			</form>
		</SForm>
	);
};

export default Form;
