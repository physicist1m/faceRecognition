import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ box, imageUrl }) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputImg"src={imageUrl} alt="requestedFoto" width="400px" height="auto"/>
                <div className="bounding-box" style={{top: box.top, right: box.right, bottom: box.bottom, left: box.left}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;