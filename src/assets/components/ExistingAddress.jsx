import React from 'react';
import { SAddressContainer, SExistingAddress } from '../css/styled';
import newAddressInputData from '../newAddressInputData';

const ExistingAddress = (props) => {
	const { savedAddress } = props;

	return (
		<SAddressContainer>
			{newAddressInputData.map((input) => {
				return (
					<SExistingAddress key={savedAddress.id}>
						<span className='key'>
							{input.span}: <span className='value'>{savedAddress[input.state]}</span>
						</span>
					</SExistingAddress>
				);
			})}
		</SAddressContainer>
	);
};

export default ExistingAddress;
