import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt3'>
		<Tilt className="Tilt shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
 			<div className="Tilt-inner pa3"><img style={{paddingTop: '5px'}} src="https://img.icons8.com/color/48/000000/facial-recognition-scan.png" alt='logo'/></div>
		</Tilt>
		</div>
	);
}

export default Logo;