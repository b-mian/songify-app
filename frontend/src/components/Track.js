import React from 'react';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Track = ({track}) => {
    
    return (
        <Dropdown.Item href="#">
            <img src={track.albumUrl} style={{height: "64px", width: "64px"}} alt="" />
            <h5 className="track-title">{track.title} by </h5>
            <h5 className="track-artist">{track.artist}</h5>
        </Dropdown.Item>  
    )
}

export default Track;
