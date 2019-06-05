import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, celebrityName, box }) => {
	return (
		<div className='center ma'>
		<div className='absolute mt3'>
			<img className='mt3' id='inputImage' src={imageURL} width='400px' height='auto' alt=''/>
			<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} ></div>
			<p className='f2 white capitalize'>{celebrityName}</p>
		</div>
		</div>
	);
}

export default FaceRecognition;

