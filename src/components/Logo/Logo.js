import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt3'>
		<Tilt className="Tilt shadow-2" options={{ max : 55 }} style={{ height: 90, width: 80 }} >
 			<div className="Tilt-inner pa3"><img style={{paddingTop: '5px'}} src="https://img.icons8.com/ios/50/000000/facial-recognition-scan-filled.png" alt='logo'/></div>
		</Tilt>
		</div>
	);
}

export default Logo;