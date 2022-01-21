import React from 'react';
import Login from './Login';
import headphone from './headphone.png';

const LandingPage = ({ code }) => {
    return (
        <div className="landing-container">
            <div className="homepage-row">
                <div className="mt-4 steps-container">
                    <ul className="instructions">
                        <li><span>  1. </span>  Pick any two tracks you like</li>
                        <li><span>  2. </span>  Click the "Create Playlist" button</li>
                        <li><span>  3. </span>  Export your playlist to Spotify</li>
                        <li><span>  4. </span>  Happy listening!</li>
                    </ul>
                </div>
            </div>
            <div className="title-pic">
                <h1 className="landing-title">Songify</h1>
                <img className="headphone" style={{height: "320px", width: "320px"}} src={headphone} alt="headphone" />
            </div>
            
            <div className="mt-4 login-component">
                <Login />
            </div>
            
        </div>
    )
}

export default LandingPage;