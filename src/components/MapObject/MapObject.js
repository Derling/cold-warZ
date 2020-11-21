import React from 'react';

const MapObject = ({object}) => {
    return (
        <div>
            {!object ?
                    <span>Hover over an icon on the map</span> :
                    <span>{object} selected!</span>
            }
        </div>
    )
};

export default MapObject;