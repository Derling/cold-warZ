import Map from './components/Map/Map';

import './App.css'

import Grid from '@material-ui/core/Grid';
import { useState } from 'react';

function App() {
  const [map, setMap] = useState({name: "zombie-map", areas:[]})

  return (

    <div className="App" >
      <Grid container spacing={3}>
        <Map map={map} updateMap={setMap} />
      </Grid>
    </div>
  );
}

export default App;
