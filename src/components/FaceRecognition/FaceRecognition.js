import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img src={imageUrl} alt="requestedFoto" width="400px" height="auto"/>
            </div>
        </div>
    );
}

export default FaceRecognition;