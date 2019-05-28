import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({ onRouteChange }) => {
	return (
		<nav className='pa3' style={{display:'flex', justifyContent:'space-between'}}>
			<Logo />
			<p onClick={() => onRouteChange('signIn')}className='f3 link dim black pointer'>Sign Out</p>
		</nav>
	);
}

export default Navigation;