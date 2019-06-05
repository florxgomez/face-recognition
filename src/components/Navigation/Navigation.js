import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if(isSignedIn){
	return (
			<nav className='pa3' style={{display:'flex', justifyContent:'space-between'}}>
			<Logo />
			<p onClick={() => onRouteChange('signout')} className='f3 link dim near-white pointer'>Sign Out</p>
			</nav>
	);
	} else {
		return (
		<nav className='pa3' style={{display:'flex', justifyContent:'flex-end'}}>
			
			<p onClick={() => onRouteChange('signIn')} className='mr4 f3 link dim near-white pointer'>Sign In</p>
			<p onClick={() => onRouteChange('register')} className='f3 link dim near-white pointer'>Register</p>
		</nav>
	
	);
	}

}

export default Navigation;