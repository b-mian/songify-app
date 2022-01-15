import React from 'react';

const Track1 = ({track}) => {
    return (
        <div className="tracks-container">
            <img src={track.albumUrl} style={{height: "64px", width: "64px"}} alt="" />
            <h6>  {track.title}  </h6>
            <h6>  {track.artist}  </h6>
        </div>
    )
}

export default Track1;
