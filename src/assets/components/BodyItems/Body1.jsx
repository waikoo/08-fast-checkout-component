import React from 'react';
import { SBody1 } from '../../css/styled';

const Body1 = () => {
	return (
		<SBody1>
			<div className='con'>
				<input
					type='radio'
					name='home'
					id='home'
				/>
				<label htmlFor='home'>Home delivery</label>
			</div>
			<div className='con'>
				<input
					type='radio'
					name='store'
					id='store'
				/>
				<label htmlFor='store'>Collect from store</label>
			</div>
		</SBody1>
	);
};

export default Body1;
