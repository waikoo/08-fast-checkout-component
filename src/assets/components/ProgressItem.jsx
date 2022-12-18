import React from 'react';
import { SProgressItem } from '../css/styled';
import images from '../images/index_images';
import colors from '../css/colors';

const ProgressItem = (props) => {
	const { number, children, isCompleted, editFromSummary } = props;
	const {
		progressItem: { bg }
	} = colors;

	let circleStyle = {
		background: isCompleted ? bg : 'white',
		border: isCompleted ? 'none' : '1px solid black'
	};
	return (
		<SProgressItem>
			<div
				className='top'
				onClick={() => editFromSummary(number)}>
				<div
					className='circle'
					style={circleStyle}>
					{isCompleted ? (
						<img
							src={images.checkmark}
							alt=''
						/>
					) : (
						<span>{number}</span>
					)}
				</div>
			</div>
			<label>{children}</label>
		</SProgressItem>
	);
};

export default ProgressItem;
