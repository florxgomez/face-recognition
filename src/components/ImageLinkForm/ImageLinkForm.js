import React from 'react';
import './ImageLinkForm.css';
import Rank from '../Rank/Rank';

const ImageLinkForm = ({onInputChange, onPictureSubmit, entries, name}) => {
	return (
		<div>
		<p className="f1 main-title">
		{'What celebrity do you look like?'}
		</p>
		<Rank name={name} entries={entries}/>
		<div className='center'>
		<div className='form center pa4 br3 shadow-5'>
		<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
		<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onPictureSubmit}>Detect</button>
		</div>
		</div>
		</div>
		);
}

export default ImageLinkForm;