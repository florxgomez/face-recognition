import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = () => {
	return (
		<nav className='pa3' style={{display:'flex', justifyContent:'space-between'}}>
			<Logo />
			<p className='f3 link dim black underline pointer'>Sign Out</p>
		</nav>
	);
}

export default Navigation;