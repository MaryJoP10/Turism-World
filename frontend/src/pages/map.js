import React from 'react';
import { MapContainer, TileLayer, GeoJSON, MarkerClusterGroup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

const Map = () => {
  const center = [45, 7]; // Latitud y longitud iniciales
  const zoom = 2; // Nivel de zoom inicial
  var arrowIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
    iconSize: [15, 25], // Tamaño de la flecha
    iconAnchor: [10, 20], // Punto de anclaje de la flecha
  });

  const geojsonFeature = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          name: "Colombia",
        },
        geometry: {
          type: "Point",
          coordinates: [-74.081749, 4.609710], // Coordenadas de Colombia
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Alemania",
        },
        geometry: {
          type: "Point",
          coordinates: [10.451526, 51.165691], // Coordenadas de Alemania
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Japón",
        },
        geometry: {
          type: "Point",
          coordinates: [139.691710, 35.689487], // Coordenadas de Japón
        },
      },
      // Puedes agregar más países aquí
    ],
  };

  const onEachCountry = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name);
      layer.on({
        mouseover: () => {
          layer.openPopup();
        },
        mouseout: () => {
          layer.closePopup();
        },
      });
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '50px', marginBottom: '50px' }}>
      <MapContainer
        center={center}
        minZoom={2}
        zoom={zoom}
        style={{ height: '680px', width: '1100px', margin: '20px', display: 'flex', padding: '20px'}}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON data={geojsonFeature} pointToLayer={(feature, latlng) => L.marker(latlng, { icon: arrowIcon })} onEachFeature={onEachCountry} />
      </MapContainer>
    </div>
  );
};

export default Map;