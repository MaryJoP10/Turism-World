import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Map2 = () => {
  const center = [45, 7]; // Latitud y longitud iniciales
  const zoom = 2; // Nivel de zoom inicial
  const handleClick = (e) => {
    console.log(e.latlng) // muestra en consola las coordenadas
  }
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '500px', width: '100%' }}
      onClick={handleClick}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
      />
      <Marker position={[4.660779178475431, -74.08494168529754]}>
        <Popup>This is your marker<br />Easily customizable.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map2;