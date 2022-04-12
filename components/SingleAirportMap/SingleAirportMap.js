import {  memo } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: 'full',
  height: '50vh',
  color: '#0000ff',
  fontSize: '30px',
};


function SingleAirportMap({ airport }) {

  const lat = airport[0].koordinaten.lat;
  const lng = airport[0].koordinaten.lng;
  const title = airport[0].name;
  const label = airport[0].icao;
  const icon = '/pr-maps-icon.png';

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAdiiVGx3_iQvEyH9ysEO4Byq7NkNdmmJc"
  })


  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat, lng }}
      zoom={7}
    >
      <Marker position={{ lat, lng } } title={title} label={label} icon={icon} />
    </GoogleMap>


  ) : <></>
}

export default memo(SingleAirportMap);