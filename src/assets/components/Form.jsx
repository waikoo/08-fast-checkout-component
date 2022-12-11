import React from 'react';
import { SForm } from '../css/styled';

const Form = (props) => {
	const { shipping, dispatchShipping } = props;

	return (
		<SForm>
			<label htmlFor='name'>
				<span>Name</span>
				<input
					type='text'
					name='address'
					id='name'
					spellCheck='false'
					value={shipping.name}
					onChange={(e) => dispatchShipping({ type: 'updateName', payload: e.target.value })}
					required='required'
				/>
			</label>
			<label htmlFor='street-nr'>
				<span>Street, Nr.</span>
				<input
					type='text'
					name='address'
					id='street-nr'
					spellCheck='false'
					value={shipping.streetAndNumber}
					onChange={(e) => dispatchShipping({ type: 'updateStreetAndNumber', payload: e.target.value })}
					required
				/>
			</label>
			<div className='row'>
				<label htmlFor='postal-code'>
					<span>Postal Code</span>
					<input
						type='number'
						name='address'
						id='postal-code'
						spellCheck='false'
						value={shipping.postalCode}
						onChange={(e) => dispatchShipping({ type: 'updatePostalCode', payload: e.target.value })}
						required
					/>
				</label>
				<label htmlFor='town'>
					<span>Town</span>
					<input
						type='text'
						name='address'
						id='town'
						spellCheck='false'
						value={shipping.town}
						onChange={(e) => dispatchShipping({ type: 'updateTown', payload: e.target.value })}
						required
					/>
				</label>
			</div>
			<label htmlFor='country'>
				<span>Country</span>
				<input
					type='text'
					name='address'
					id='country'
					spellCheck='false'
					value={shipping.country}
					onChange={(e) => dispatchShipping({ type: 'updateCountry', payload: e.target.value })}
					required
				/>
			</label>
			<label htmlFor='phone'>
				<span>Phone number</span>
				<input
					type='tel'
					name='address'
					id='phone'
					spellCheck='false'
					value={shipping.phone}
					onChange={(e) => dispatchShipping({ type: 'updatePhone', payload: e.target.value })}
					required
				/>
			</label>
			<label htmlFor='email'>
				<span>Email address</span>
				<input
					type='tel'
					name='address'
					id='email'
					spellCheck='false'
					value={shipping.email}
					onChange={(e) => dispatchShipping({ type: 'updateEmail', payload: e.target.value })}
					required
				/>
			</label>
		</SForm>
	);
};

export default Form;
