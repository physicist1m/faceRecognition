import React from 'react';
import Tilt from 'react-tilt';
import face from './logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 50 }} style={{ height: 80, width: 80}}>
                <div className="Tilt-inner">
                    <img src={face} alt="logo" />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;