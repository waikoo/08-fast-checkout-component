import React from 'react';
import inputData from '../../assets/newAddressInputData';
import { SAddressContainer, SExistingAddress } from '../css/styled';

const ExistingAddress = (props) => {
	const { storedAddress } = props;

	return (
		<SAddressContainer>
			{inputData.map((input) => {
				return (
					<SExistingAddress key={input.id}>
						<span className='key'>
							{input.span}: <span className='value'>{storedAddress[input.state]}</span>
						</span>
					</SExistingAddress>
				);
			})}
		</SAddressContainer>
	);
};

export default ExistingAddress;
