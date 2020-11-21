import Map from './components/Map/Map';
import MapObject from './components/MapObject/MapObject';

import './App.css'

import Grid from '@material-ui/core/Grid';
import { useState } from 'react';

function App() {
  const [map, setMap] = useState({name: "zombie-map", areas:[]})
  const [mapObject, setObject] = useState('')

  return (
    <div className="App" >
      <h1>Zombie map</h1>
      <Grid container spacing={3}>
        <Map map={map} updateMap={setMap} changeObject={setObject} />
        <MapObject object={mapObject} />
      </Grid>
    </div>
  );
}

export default App;
