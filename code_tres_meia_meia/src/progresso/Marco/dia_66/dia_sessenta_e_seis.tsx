import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "marker-icon.png",
  iconRetinaUrl: "marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [1, 41],
  popupAnchor: [1, -34],
  shadowUrl: "marker-shadow.png",
  shadowSize: [41, 41],
});

interface Location {
  latitude: number;
  longitude: number;
  name: string;
}

interface MapProps {
  locations: Location[];
}

const InteractiveMap: React.FC<MapProps> = ({ locations }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={100}
      style={{ height: "100px", width: "80%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker
          position={[location.latitude, location.longitude]}
          key={index}
          icon={customIcon}
        >
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default InteractiveMap;
