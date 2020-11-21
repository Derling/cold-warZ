import React from 'react';
import ImageMapper from 'react-image-mapper';


import die_machine_main from './assets/die_machine_main.jpeg';
import scaleCoords from './utils';
import MAP_DATA, { GRID_SCALE } from './assets/mapData';

import Grid from '@material-ui/core/Grid';

const Map = ({map, updateMap, changeObject}) => {

    const onLoad = () => {
        const map = document.getElementsByTagName('canvas')[0]
        updateMap({
            name: "zombie-map",
            areas: scaleCoords(MAP_DATA, map.width, map.height, GRID_SCALE)
        })
    }

    return (
        <Grid item xs={6}>
            <ImageMapper onImageClick={e => {console.log(e)}} onLoad={onLoad} map={map} src={die_machine_main} onMouseEnter={area => changeObject(area.name)}/>
        </Grid>
)};

export default Map;