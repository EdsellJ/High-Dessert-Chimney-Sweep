'use client';

import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import '../leaflet.css';

// Define the service area center (coordinates for the High Desert area, CA)
const SERVICE_CENTER: [number, number] = [34.5362, -117.2928]; // Apple Valley/Victorville area
const SERVICE_RADIUS = 40000; // 40km radius (approximately 25 miles)

// Fix for Leaflet marker icons
if (typeof window !== 'undefined') {
  // @ts-expect-error - _getIconUrl is indeed a property in the implementation
  delete L.Icon.Default.prototype._getIconUrl;
  
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/leaflet/marker-icon-2x.png',
    iconUrl: '/leaflet/marker-icon.png',
    shadowUrl: '/leaflet/marker-shadow.png',
  });
}

export default function MapComponent() {
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