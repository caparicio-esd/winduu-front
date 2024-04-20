"use client";
import "leaflet/dist/leaflet.css";
import * as ReactLeaflet from "react-leaflet";

const Map = () => {
  return (
    <div className="map h-96 w-full col-span-2 rounded overflow-hidden">
      <ReactLeaflet.MapContainer
        className="w-full h-full "
        center={[51.505, -0.09]}
      >
        <ReactLeaflet.TileLayer
          attribution="Leaflet - OSMap"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </ReactLeaflet.MapContainer>
    </div>
  );
};

export default Map;
