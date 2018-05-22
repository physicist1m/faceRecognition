import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className="f3">
                {`Give me picture's url and I'll detect face on it`}
            </p>
            <div className='center'>
                <div className="pa4 br3 shadow-5 center form">
                    <input type="text" className="f4 pa2 w-70 center" onChange={onInputChange}/>
                    <button 
                        onClick={onButtonSubmit}
                        className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                        >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;