// src/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [-7.131910407902484, 110.40699993950896]; // Ganti dengan koordinat kantor kamu

const Map = () => (
  <MapContainer center={center} zoom={30} style={{ height: '300px', width: '100%' }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={center}>
      <Popup>
        Kantor Kami:
        Jl. Tawes Raya, Dliwang, Ungaran, Kec. Ungaran Barat,
        Kabupaten Semarang, Jawa Tengah 50514, Indonesia
      </Popup>
    </Marker>
  </MapContainer>
);

export default Map;
