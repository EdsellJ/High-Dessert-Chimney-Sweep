'use client';

import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

// Define the service area center (coordinates for the High Desert area, CA)
const SERVICE_CENTER = [34.5362, -117.2928]; // Apple Valley/Victorville area
const SERVICE_RADIUS = 48500; // 40km radius (approximately 25 miles)

export default function LeafletMap() {
  useEffect(() => {
    // Fix Leaflet icon issues - this code only runs on the client
    const L = require('leaflet');
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/leaflet/marker-icon-2x.png',
      iconUrl: '/leaflet/marker-icon.png',
      shadowUrl: '/leaflet/marker-shadow.png',
    });
  }, []);

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <MapContainer 
        center={SERVICE_CENTER} 
        zoom={9} 
        style={{ height: '500px', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle 
          center={SERVICE_CENTER}
          radius={SERVICE_RADIUS}
          pathOptions={{ 
            fillColor: '#dc2626', 
            fillOpacity: 0.2, 
            color: '#991b1b',
            weight: 2
          }}
        />
        <Marker position={SERVICE_CENTER}>
          <Popup>
            <b>High Desert Chimney Sweep</b><br />
            Our central service area covering all High Desert communities.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
} 