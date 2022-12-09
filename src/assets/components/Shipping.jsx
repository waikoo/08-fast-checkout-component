import React from 'react';

const Shipping = () => {
	return (
		<main>
			<h1>Shipping Method</h1>
			<div>
				<input
					type='radio'
					name='home'
				/>
				<label htmlFor='home'></label>
			</div>

			<div>
				<input
					type='radio'
					name='store'
				/>
				<label htmlFor='store'></label>
			</div>
		</main>
	);
};

export default Shipping;
