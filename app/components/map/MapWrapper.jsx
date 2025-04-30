'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// We need to load the map component dynamically without SSR
// This ensures Leaflet only runs on the client
const DynamicMap = dynamic(
  () => import('./LeafletMap'),
  { 
    loading: () => <p>Loading map...</p>,
    ssr: false 
  }
);

export default function MapWrapper() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {!isMounted && (
        <div className="bg-gray-100 rounded-lg w-full h-[500px] flex items-center justify-center">
          <p className="text-gray-500">Loading map...</p>
        </div>
      )}
      {isMounted && <DynamicMap />}
    </>
  );
} 