import React from 'react';
import '../styles/map.css';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const Map = () => {
    return (
        <div>
            <h1>Opcion 1</h1>
        <MapContainer center={[48.8566,2.3922]} zoom={2} minZoom={2} maxBounds={2}  className='MapContainer'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>

        <h1>Opcion 2</h1>
        
        </div>
    );
    
}
export default Map;