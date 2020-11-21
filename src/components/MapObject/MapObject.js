import React from 'react';

import Grid from '@material-ui/core/Grid';

import ObjectDetail from './ObjectDetails';

const MapObject = ({object}) => {
    return (
        <Grid item x={6}>
            {!object ?
                    <span>Hover over an icon on the map</span> :
                    <ObjectDetail object={object} />
            }
        </Grid>
    )
};

export default MapObject;