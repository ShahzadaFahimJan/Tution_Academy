import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const mapContainerStyle = { width: "100%", height: "400px" };
  const center = { lat: 33.6844, lng: 73.0479 }; // Islamabad, Pakistan

  return (
    <LoadScript googleMapsApiKey="AIzaSyCEY1fIoSHLoLxE6dBP8r-AFg2K3uTcCVg">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
