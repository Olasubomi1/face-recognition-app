import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
    return (
      <div className='ma4 mt0'>
        <Tilt className="Tilt ma3 br2 shadow-2" options={{ max : 55 }} style={{ height: 130, width: 130 }} >
          <div className="Tilt-inner"> <img style={{paddingTop: '10px'}} alt='brain' src={brain} /> </div>
        </Tilt>
      </div>
    );
}

export default Logo;
