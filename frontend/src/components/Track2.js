import React from 'react';

const Track2 = ({track}) => {
    return (
        <div className="tracks-container">
            <select>
                <img src={track.albumUrl} style={{height: "64px", width: "64px"}} alt="" />
                <h4>{track.title}</h4>
                <h5>{track.artist}</h5>
            </select>
        </div>
    )
}

export default Track2;
