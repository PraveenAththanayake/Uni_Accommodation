import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

interface MapProps {
  center?: google.maps.LatLngLiteral;
  zoom?: number;
  onClick?: (event: google.maps.MapMouseEvent) => void;
  selectedLocation?: google.maps.LatLngLiteral;
}

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
};

const options = {
  mapId: "9f61529698b48602",
  mapTypeControl: false,
  zoomControl: false,
  fullscreenControl: true,
  clickableIcons: false,
  scrollwheel: true,
  streetViewControl: false,
};

const Map = ({ zoom = 10, onClick, selectedLocation }: MapProps) => {
  const center = { lat: 6.821456927849568, lng: 80.04150852388756 };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDfd43AVuZ-MC7bx0nrfSaVKYLN2WBN_yI",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onClick={onClick}
      options={options}
    >
      <MarkerF position={{ lat: 6.821414316297818, lng: 80.04168018526603 }} />
      {selectedLocation && <MarkerF position={selectedLocation} />}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
