import React from 'react';
import useAuth from './useAuth';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SpotifyWebApi from 'spotify-web-api-node';
import Track1 from './Track1';
import Track2 from './Track2';

// create new instance of Spotify API with given client credentials
const spotifyAPI = new SpotifyWebApi({
    clientId: "4362dfe6f5c244dbbc69cff0883518c4", 
});

const Forms = ({code}) => {
    // used for post request to server with auth code
    const accessToken = useAuth(code);
    const [search1, setSearch1] = useState("");
    const [search2, setSearch2] = useState("");
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
        console.log(searchResults2);
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

    return (
        <div className="forms-container">
            <h1 className="landing-title">Songify</h1>
            <div className="mt-4 align-self-center instructions-container">
                <ol className="instructions">
                    <li>Pick any two tracks you like</li>
                    <li>Click the "Create Playlist" button</li>
                    <li>Export your playlist to Spotify</li>
                    <li>Happy listening!</li>
                </ol>
            </div>
            <form className="search-form">
                <div className="form-group mt-4">
                    <label for="track1">Choose Track 1</label>
                    <input type="text" className="form-control mt-3" onChange={e => setSearch1(e.target.value)} id="track1" placeholder="Search Spotify"></input>
                </div>
                <div className="flex-grow-1 my-2">
                    {searchResults1.map(track => (
                        <Track1 track={track} key={track.uri} />
                    ))}
                </div>
                <div className="form-group mt-4">
                    <label for="track2">Choose Track 2</label>
                    <input type="text" className="form-control mt-3" id="track2" onChange={e => setSearch2(e.target.value)} placeholder="Search Spotify"></input>
                </div>
                <div className="flex-grow-1 my-2">
                    {searchResults2.map(track => (
                        <Track2 track={track} key={track.uri} />
                    ))}
                </div>
                <Link to="/">
                    <button type="submit" className="btn btn-success mt-3">Create Playlist</button>
                </Link>
            </form>
        </div>
    )
}

export default Forms;