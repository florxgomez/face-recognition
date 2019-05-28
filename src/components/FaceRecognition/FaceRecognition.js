import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, celebrityName, box }) => {
	return (
		<div className='center ma'>
		<div className='absolute mt3'>
			<img id='inputImage' src={imageURL} width='300px' height='auto'/>
			<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} ></div>
			<p>{celebrityName}</p>
		</div>
		</div>
	);
}

export default FaceRecognition;