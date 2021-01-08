import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onButtonDetect }) => {
    return (
      <div>
        <p className='f4'>
        	{'This SuperBrain will detect faces in your pictures. Give it a try '}
        </p>
        <div className='center'>
        	<div className='form center pa4 br3 shadow-5'>
        		<input className='f4 pa2 w-70 center' type='tex' 
        		 onChange={onInputChange} 
        		/>
        		<button 
        		 className='w-30 grow f4 link ph3 pv2 dib white bg-blue pointer' 
        		 onClick={onButtonDetect} 
        		>Detect</button>
        	</div>	
        </div>
      </div>
    );
}

export default ImageLinkForm;
