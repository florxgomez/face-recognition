import React from 'react';

const FaceRecognition = ({ imageURL, celebrityName }) => {
	return (
		<div className='center ma'>
		<div className='absolute mt3'>
			<img src={imageURL} width='300px' height='auto'/>
			<p>{celebrityName}</p>
		</div>
		</div>
	);
}

export default FaceRecognition;