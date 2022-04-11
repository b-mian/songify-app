import React from 'react';
import Login from './Login';
import headphone from './headphone.png';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <div className="title-pic">
                <h1 className="landing-title">Playful</h1>
                <h4 className="landing-subheading">Custom playlists based on two songs of your choice</h4>
                <h6 className="landing-subheading">View track metadata of your new playlist</h6>
                <img className="headphone" style={{height: "360px", width: "460px"}} src={headphone} alt="headphone" />
            </div>
            <div className="mt-4 login-component">
                <Login />
            </div>
        </div>
    )
}

export default LandingPage;