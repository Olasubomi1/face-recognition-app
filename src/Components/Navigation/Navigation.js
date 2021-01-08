import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  	if (isSignedIn) {
  		return (
  			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
     			<p onClick={() => onRouteChange('Signout')} className='f3 link dim black underline pa3 pointer'>Signout</p>
    		</nav>
    	);
  	} else {
  		return (
  			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
     			<p onClick={() => onRouteChange('Signin')} className='f3 link dim black underline pa3 pointer'>Signin</p>
     			<p onClick={() => onRouteChange('Register')} className='f3 link dim black underline pa3 pointer'>Register</p>
    		</nav>
    	);
  	}
}

export default Navigation;