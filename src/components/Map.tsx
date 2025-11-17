import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [51.5310, 25.2854], // Doha, Qatar coordinates
      zoom: 12,
    });

    // Add a marker for the location
    new mapboxgl.Marker({ color: '#0EA5E9' })
      .setLngLat([51.5310, 25.2854])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>Doha, Qatar</h3>'))
      .addTo(map.current);

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken);
      setIsTokenSet(true);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isTokenSet) {
    return (
      <div className="w-full h-64 bg-muted rounded-xl flex flex-col items-center justify-center border border-divider p-6 space-y-4">
        <p className="text-sm text-muted-foreground text-center">
          Enter your Mapbox public token to view the map
        </p>
        <form onSubmit={handleTokenSubmit} className="w-full max-w-md space-y-2">
          <Input
            type="text"
            placeholder="pk.eyJ1..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="w-full"
          />
          <Button type="submit" className="w-full">
            Load Map
          </Button>
        </form>
        <p className="text-xs text-muted-foreground text-center">
          Get your token at{' '}
          <a 
            href="https://account.mapbox.com/access-tokens/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            mapbox.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 rounded-xl overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;
