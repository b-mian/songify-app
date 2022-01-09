import React from 'react';
import Login from './Login';

const LandingPage = ({ code }) => {
    return (
        <div className="landing-container">
            <div className="homepage-row row justify-content-center">
                <div className="col-12 align-self-center">
                    <h1 className="landing-title">Songify</h1>
                </div>
                <div className="col-12 mt-4 align-self-center">
                    <ol className="instructions">
                        <li>Pick any two tracks you like</li>
                        <li>Click the "Create Playlist" button</li>
                        <li>Export your playlist to Spotify</li>
                        <li>Happy listening!</li>
                    </ol>
                </div>
            </div>
            <div className="col-12 mt-4 align-self-center login-component">
                <Login />
            </div>
            
        </div>
    )
}

export default LandingPage;