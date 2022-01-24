import React from 'react';
import Login from './Login';
import headphone from './headphone.png';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <div className="title-pic">
                <h1 className="landing-title">Songify</h1>
                <h3 className="landing-subheading">Custom playlists based on two songs of your choice</h3>
                <img className="headphone" style={{height: "360px", width: "360px"}} src={headphone} alt="headphone" />
            </div>
            <div className="mt-4 login-component">
                <Login />
            </div>
        </div>
    )
}

export default LandingPage;