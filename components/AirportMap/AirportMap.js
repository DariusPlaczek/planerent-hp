import { useState, useCallback, memo } from 'react';
import { GoogleMap, Marker, MarkerClusterer, useJsApiLoader, Circle } from "@react-google-maps/api";

const containerStyle = {
  width: 'full',
  height: '50vh',
  color: '#0000ff',
  fontSize: '30px',
};

const center = {
  lat: 51.40356407005574,
  lng: 6.938295322591496
};

function AirportMap({ airports, singelMap }) {



  const [maps, setMaps] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAdiiVGx3_iQvEyH9ysEO4Byq7NkNdmmJc"
  })


  const optionsCircle = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    visible: true,
    radius: 64376,
    zIndex: 2
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      mapContainerClassName="mapper"
      center={center}
      zoom={5}
    >
      {singelMap ?
        <Circle
          center={center}
          options={optionsCircle}
        /> : <></>
      }

      <MarkerClusterer >
        {(markerClusterer => {
          return airports && airports.map(marker => <Marker className="text-3xl" position={marker.koordinaten} key={marker.id} clusterer={markerClusterer} title={marker.name} label={marker.icao} icon={'/pr-maps-icon.png'} /> )
        })}

      </MarkerClusterer>
    </GoogleMap>

  ) : <></>
}

export default memo(AirportMap);