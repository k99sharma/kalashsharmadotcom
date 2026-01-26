// imports
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";

const position: LatLngExpression = [28.4595, 77.0266];

const Map = () => {
  return (
    <div className="map">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "200px", width: "100%", borderRadius: "12px" }}
        scrollWheelZoom={false}
        aria-hidden="true"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>Based in India 🇮🇳</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
