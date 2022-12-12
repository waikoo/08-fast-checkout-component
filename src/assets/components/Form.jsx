import React, { useRef, useState } from 'react';
import { SForm } from '../css/styled';
import AddressInput from './AddressInput';
import Button from './Button';
import inputData from '../../assets/newAddressInputData';

const Form = (props) => {
	const { uiState, uiDispatch, shipping, handleAddressChange, areAllFieldsCompleted, dispatchShipping, setShowStoredAddress } = props;

	const [showError, setShowError] = useState(false);
	const formRef = useRef(null);

	const fillForm = () => {
		if (formRef) {
			const inputs = formRef.current.querySelectorAll('input');
			inputs.forEach((input) => {
				switch (input.type) {
					case 'text':
						input.value = 'text';
						break;
					case 'email':
						input.value = 'ai@chatgpt.com';
						break;
					case 'number':
						input.value = '12';
						break;
					case 'tel':
						input.value = '5939205952';
						break;
					default:
						input.value = '12' || 'abc' || 'ai@chatgpt.com';
				}
			});
		}
	};

	return (
		<SForm>
			<form ref={formRef}>
				{inputData.map((input) => (
					<AddressInput
						key={input.id}
						value={shipping.address[input.state]}
						{...input}
						handleAddressChange={handleAddressChange}
					/>
				))}
				{showError && <span style={{ color: 'red' }}>Please fill out all fields.</span>}
				<h2 onClick={fillForm}>Fill Form</h2>
				<Button
					form={formRef}
					uiDispatch={uiDispatch}
					setShowError={setShowError}
					showError={showError}
					shipping={shipping}
					areAllFieldsCompleted={areAllFieldsCompleted}
					dispatchShipping={dispatchShipping}
					setShowStoredAddress={setShowStoredAddress}>
					Save
				</Button>
			</form>
		</SForm>
	);
};

export default Form;
