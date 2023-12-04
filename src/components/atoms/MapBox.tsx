import * as React from 'react';
import Map from 'react-map-gl';

export const MapComponent = () => {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiY2VsaW9qb2FxdWltY3VtYmEiLCJhIjoiY2wxbWFreWIxMGloZDNwa3ExeTh3cWdtYiJ9.1INOog0h4wWjPsAeevDkhQ"
      initialViewState={{
        latitude: -25.952034771994455,
        longitude:  32.46048160285446,
        zoom: 14
      }}
      style={{borderRadius :"20rem"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}