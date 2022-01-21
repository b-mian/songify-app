import React from 'react';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=4362dfe6f5c244dbbc69cff0883518c4&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-top-read%20user-modify-playback-state";

const Login = () => {
    return (
        <div className="login-btn-container">
            <a href={AUTH_URL}>
                <button className="btn btn-success btn-lg">
                    Login with Spotify
                </button>
            </a>
        </div>
    )
}

export default Login;