import React from 'react';
import useAuth from './useAuth';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SpotifyWebApi from 'spotify-web-api-node';
import axios from 'axios';


const spotifyAPI = new SpotifyWebApi({
    clientId: "4362dfe6f5c244dbbc69cff0883518c4", 
});

const CreatePlaylist = ({code, trackOne, trackTwo}) => {

    const numSongs = 25;
    const accessToken = useAuth(code);
    const [songData, setSongData] = useState(false);

    useEffect(() => {
        if (!accessToken) {
            return;
        }
        spotifyAPI.setAccessToken(accessToken);

        
    }, [accessToken])

    useEffect(() => {

        spotifyAPI.getMyTopTracks()
        .then(function(data) {
            let topTracks = data.body.items;
            console.log(topTracks);
        }, function(err) {
            console.log('Something went wrong!', err);
        });

    }, [songData, accessToken])

    return (
        <div className="playlist-container">
            <div>
                <img src={trackOne.albumUrl} style={{height: "64px", width: "64px"}} alt="" />
                <h5 className="track-title">{trackOne.title} by </h5>
                <h5 className="track-artist">{trackOne.artist}</h5>
            </div>
            <div>
                <img src={trackTwo.albumUrl} style={{height: "64px", width: "64px"}} alt="" />
                <h5 className="track-title">{trackTwo.title} by </h5>
                <h5 className="track-artist">{trackTwo.artist}</h5>
            </div>
            <Link to="/">
                <button className="btn btn-primary btn-lg" onClick={() => setSongData(true)}>Export to Spotify</button>
            </Link>
           
        </div>
    )
}

export default CreatePlaylist;