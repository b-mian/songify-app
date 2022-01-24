import React from 'react';
import useAuth from './useAuth';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SpotifyWebApi from 'spotify-web-api-node';
import Dropdown from 'react-bootstrap/Dropdown';

// create new instance of Spotify API with given client credentials
const spotifyAPI = new SpotifyWebApi({
    clientId: "4362dfe6f5c244dbbc69cff0883518c4", 
});

const Forms = () => {
    // used for post request to server with auth code
    const code = new URLSearchParams(window.location.search).get('code');
    const accessToken = useAuth(code);

    const [search1, setSearch1] = useState("");
    const [search2, setSearch2] = useState("");
    const [playlist, setPlaylist] = useState([]);
    const [song1, setSong1] = useState(null);
    const [song2, setSong2] = useState(null);
    const [created, setCreated] = useState(false);
    const [searchResults1, setSearchResults1] = useState([]);
    const [searchResults2, setSearchResults2] = useState([]);

    const [showPlaylist, setShowPlaylist] = useState(false);
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
            setPlaylist([]);
            setCreated(false);
            setSong1(null);
            setSong2(null);
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
                    artistID: track.artists[0].id,
                    title: track.name,
                    id: track.id,
                    url: track.uri,
                    albumUrl: smallestImage.url
                }
            })
        )});

    }, [search1, accessToken])
    // call to api based on second search query; return album metadata into an array
    useEffect(() => {
        if (!search2) {
            setPlaylist([]);
            setCreated(false);
            setSong1(null);
            setSong2(null);
        }
        spotifyAPI.searchTracks(search2).then(res => {
            setSearchResults2(res.body.tracks.items.map(track => {
                // return the smallest album image by cycling through all images
                const smallestImage = track.album.images.reduce((smallest, image) => {
                    if (image.height < smallest.height) return image
                    return smallest
                }, track.album.images[0])
                return {
                    artist: track.artists[0].name,
                    artistID: track.artists[0].id,
                    title: track.name,
                    id: track.id,
                    url: track.uri,
                    albumUrl: smallestImage.url
                }
            })
        )});

    }, [search2, accessToken])

    const handlePlaylist = () => {
        if (!song1 || !song2) {
            setCreated(false);
            setPlaylist([]);
            return;
        }
        setCreated(true);
        spotifyAPI.getRecommendations({
            min_energy: 0.4,
            seed_artists: [song1.artistID, song2.artistID],
            seed_genres: [],
            seed_tracks: [song1.id, song2.id],
            min_popularity: 50
        })
        .then(res => {
          let recommendations = res.body.tracks;
          setPlaylist(recommendations.map(rec => {
            
            return {
                artist: rec.artists[0].name,
                artistID: rec.artists[0].id,
                title: rec.name,
                uri: rec.uri,
                id: rec.id
            }
          }));
          
        })
        .catch(err => {
            console.log("Something went wrong!", err);
        })
    }

    const exportPlaylist = () => {
        if (!song1 || !song2) {
            setCreated(false);
            setPlaylist([]);
            return;
        }
        let playlistName = prompt("Give your playlist a name...");
        spotifyAPI.createPlaylist(playlistName, { 'description': 'My custom playlist from that cool Songify app', 'public': false })
        .then(data => {
            const playlistID = data.body.id;
            spotifyAPI.addTracksToPlaylist(playlistID, playlist.map(track => track.uri))
            .then(res => {
                console.log('Added tracks to playlist!');
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
    

    return (
        <div className="forms-container">
            <h1 className="landing-title">Songify</h1>
            <h3 className="landing-subheading">Custom playlists based on two songs of your choice</h3>
            <form className="search-form">
                <div className="form-group mt-4">
                    <label for="track1">Choose Track 1</label>
                    <input type="text" className="form-control mt-3" onChange={e => setSearch1(e.target.value)} id="track1" placeholder="Search Spotify"></input>
                </div>
                {song1 === null ?
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
                    <div className="chosen-song" style={{display: (song1 !== null) ? "block" : "none"}}>
                        <img src={song1.albumUrl} style={{height: "64px", width: "64px"}} alt="" />
                        <h5 className="track-title">{song1.title} by </h5>
                        <h5 className="track-artist">{song1.artist}</h5>
                        <button className="btn cancel-song" onClick={() => setSong1(null)}>X</button>
                    </div>

                }
                <div className="form-group mt-4">
                    <label for="track2">Choose Track 2</label>
                    <input type="text" className="form-control mt-3" id="track2" onChange={e => setSearch2(e.target.value)} placeholder="Search Spotify"></input>
                </div>
                {song2 === null ?
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
                    <div className="chosen-song" style={{display: (song2 !== null) ? "block" : "none"}}>
                        <img src={song2.albumUrl} style={{height: "64px", width: "64px"}} alt="" />
                        <h5 className="track-title">{song2.title} by </h5>
                        <h5 className="track-artist">{song2.artist}</h5>
                        <button className="btn cancel-song" onClick={() => setSong2(null)}>X</button>
                    </div>

                }
                
                
                <Link to="/">
                    <button type="submit" onClick={() => handlePlaylist()} className="btn btn-success mt-3">Create Playlist</button>
                </Link>
                {((song1 !== null) && (song2 !== null) && (playlist !== [])) ?
                    <div>
                        <div className="playlist-container">
                            {playlist.map(track => (
                                <div key={track.id}>
                                    <h5 className="track-title">{track.title} by </h5>
                                    <h5 className="track-artist">{track.artist}</h5>
                                </div>
                            ))} 
                            
                        </div> 
                    </div>
                :
                    <div></div>
                }
                {((created === true) && (song1 !== null) && (song2 !== null)) ?
                    <Link to="/">
                        <button className="btn btn-success" onClick={() => exportPlaylist()}>Export to Spotify</button>
                    </Link>
                :
                    <div></div>
                }
                
                
            </form>
        </div>
    )
}

export default Forms;