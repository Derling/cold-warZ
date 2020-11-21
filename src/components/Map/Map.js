import React from 'react';
import ImageMapper from 'react-image-mapper';


import die_machine_main from './assets/die_machine_main.jpeg';
import scaleCoords from './utils';
import MAP_DATA, { GRID_SCALE } from './assets/mapData';

import Grid from '@material-ui/core/Grid';

const Map = ({map, updateMap, changeComponent}) => {

    const onLoad = () => {
        const map = document.getElementsByTagName('canvas')[0]
        console.log(map)
        updateMap({
            name: "zombie-map",
            areas: scaleCoords(MAP_DATA, map.width, map.height, GRID_SCALE)
        })
    }

    const enterHandler = (area) => {
        console.log(area)
        console.log(area.shape, area.name)
    }

    return (
        <Grid item xs={6}>
            <ImageMapper onLoad={onLoad} map={map} src={die_machine_main} onMouseEnter={enterHandler}/>
        </Grid>
        
        
)};

export default Map;