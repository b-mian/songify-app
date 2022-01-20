import React from 'react';
import useAuth from './useAuth';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SpotifyWebApi from 'spotify-web-api-node';
import Track from './Track';
import Track2 from './Track2';
import Dropdown from 'react-bootstrap/Dropdown';

// create new instance of Spotify API with given client credentials
const spotifyAPI = new SpotifyWebApi({
    clientId: "4362dfe6f5c244dbbc69cff0883518c4", 
});

const Forms = ({code}) => {
    // used for post request to server with auth code
    const accessToken = useAuth(code);
    const [search1, setSearch1] = useState("");
    const [search2, setSearch2] = useState("");
    const [song1, setSong1] = useState(false);
    const [song2, setSong2] = useState(false);
    const [searchResults1, setSearchResults1] = useState([]);
    const [searchResults2, setSearchResults2] = useState([]);
    // perform a check on whether the access token is null; if not, set it
    useEffect(() => {
        if (!accessToken) {
            return;
        }
        spotifyAPI.setAccessToken(accessToken);
    }, [accessToken])
    // call to api based on search query; return album metadata into an array
    useEffect(() => {
        if (!search1) {
            return setSearchResults1([]);
        }
        setSong1(false);
        // testing search results
        console.log(searchResults1);
        spotifyAPI.searchTracks(search1).then(res => {
            setSearchResults1(res.body.tracks.items.map(track => {
                // return the smallest album image by cycling through all images
                const smallestImage = track.album.images.reduce((smallest, image) => {
                    if (image.height < smallest.height) return image
                    return smallest
                }, track.album.images[0])
                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    url: track.uri,
                    albumUrl: smallestImage.url
                }
            })
        )});

    }, [search1, accessToken])
    // call to api based on second search query; return album metadata into an array
    useEffect(() => {
        if (!search2) {
            return setSearchResults2([]);
        }
        setSong2(false);
        spotifyAPI.searchTracks(search2).then(res => {
            setSearchResults2(res.body.tracks.items.map(track => {
                // return the smallest album image by cycling through all images
                const smallestImage = track.album.images.reduce((smallest, image) => {
                    if (image.height < smallest.height) return image
                    return smallest
                }, track.album.images[0])
                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    url: track.uri,
                    albumUrl: smallestImage.url
                }
            })
        )});

    }, [search2, accessToken])

    useEffect(() => {
        
    }, [song2, song1])
    

    return (
        <div className="forms-container">
            <h1 className="landing-title">Songify</h1>
            <div className="mt-4 align-self-center instructions-container">
                <ol className="instructions">
                    <li>Pick any two tracks you like</li>
                    <li>Click the "Create Playlist" button</li>
                    <li>Export your playlist to Spotify</li>
                    <li>Enjoy your listening time!</li>
                </ol>
            </div>
            <form className="search-form">
                <div className="form-group mt-4">
                    <label for="track1">Choose Track 1</label>
                    <input type="text" className="form-control mt-3" onChange={e => setSearch1(e.target.value)} id="track1" placeholder="Search Spotify"></input>
                </div>
                {song1 === false ?
                    <div className="tracks-container" style={{display: search1 === "" ? "none" : "block"}}>
                        {searchResults1.map(tracks => (
                            <Dropdown.Item href="#" onClick={() => setSong1(tracks)}>
                                <img src={tracks.albumUrl} style={{height: "64px", width: "64px"}} alt="" />
                                <h5 className="track-title">{tracks.title} by </h5>
                                <h5 className="track-artist">{tracks.artist}</h5>
                            </Dropdown.Item> 
                        ))}
                    </div>
                :
                    <div className="chosen-song" style={{display: (song1 !== false) ? "block" : "none"}}>
                        <img src={song1.albumUrl} style={{height: "64px", width: "64px"}} alt="" />
                        <h5 className="track-title">{song1.title} by </h5>
                        <h5 className="track-artist">{song1.artist}</h5>
                        <button className="cancel-song" onClick={() => setSong1(false)}>X</button>
                    </div>

                }
                <div className="form-group mt-4">
                    <label for="track2">Choose Track 2</label>
                    <input type="text" className="form-control mt-3" id="track2" onChange={e => setSearch2(e.target.value)} placeholder="Search Spotify"></input>
                </div>
                {song2 === false ?
                    <div className="tracks-container" style={{display: search2 === "" ? "none" : "block"}}>
                        {searchResults2.map(tracks => (
                            <Dropdown.Item href="#" onClick={() => setSong2(tracks)}>
                                <img src={tracks.albumUrl} style={{height: "64px", width: "64px"}} alt="" />
                                <h5 className="track-title">{tracks.title} by </h5>
                                <h5 className="track-artist">{tracks.artist}</h5>
                            </Dropdown.Item> 
                        ))}
                    </div>
                :
                    <div className="chosen-song" style={{display: (song2 !== false) ? "block" : "none"}}>
                        <img src={song2.albumUrl} style={{height: "64px", width: "64px"}} alt="" />
                        <h5 className="track-title">{song2.title} by </h5>
                        <h5 className="track-artist">{song2.artist}</h5>
                        <button className="btn cancel-song" onClick={() => setSong2(false)}>X</button>
                    </div>

                }
                <Link to="/">
                    <button type="submit" className="btn btn-success mt-3">Create Playlist</button>
                </Link>
            </form>
        </div>
    )
}

export default Forms;