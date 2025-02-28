
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import FadeContent from "@/components/FadeContent";

const AlertMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    
    // This would be replaced with actual map implementation
    // using libraries like Leaflet or Google Maps
    const initMap = () => {
      const mapContainer = mapRef.current;
      if (!mapContainer) return;
      
      // Mock map initialization with a placeholder
      mapContainer.style.background = "url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/36.8219,-1.2921,6,0/800x400?access_token=pk.placeholder') no-repeat center/cover";
      
      // Add overlay for locations (in a real implementation)
      const alertLocations = [
        { lat: -1.2921, lng: 36.8219, location: "Nairobi" },
        { lat: -4.0435, lng: 39.6682, location: "Mombasa" },
        { lat: 0.5180, lng: 35.2715, location: "Eldoret" }
      ];
      
      // This would render actual markers in a real implementation
      console.log("Map would show these locations:", alertLocations);
    };
    
    initMap();
  }, []);

  return (
    <FadeContent duration={1000}>
      <Card className="overflow-hidden shadow-lg border-0">
        <div className="relative">
          <div ref={mapRef} className="w-full h-[400px] bg-muted relative">
            {/* Placeholder for map rendering */}
            <div className="absolute inset-0 flex items-center justify-center bg-muted/10 backdrop-blur-sm">
              <p className="text-center text-muted-foreground px-4">
                Interactive map showing alert locations across Kenya
                <br />
                <span className="text-sm">(Actual map implementation would be integrated here)</span>
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-3 rounded-md shadow-md text-xs">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span>Active Alerts (3)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-amber-500"></span>
              <span>Recent Alerts (2)</span>
            </div>
          </div>
        </div>
      </Card>
    </FadeContent>
  );
};

export default AlertMap;
