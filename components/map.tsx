"use client";

import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "1000px",
  borderRadius: "10px",
};

const options = {
  mapId: "9f61529698b48602",
  mapTypeControl: false,
  zoomControl: false,
  fullscreenControl: false,
  clickableIcons: false,
  scrollwheel: true,
  streetViewControl: false,
};

const center = {
  lat: 6.821456927849568,
  lng: 80.04150852388756,
};

const pinIcon = {
  url: "/assets/marker.png",
  scaledSize: { width: 35, height: 35 },
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDfd43AVuZ-MC7bx0nrfSaVKYLN2WBN_yI",
  });

  const markerClicked = () => {
    console.log("Marker clicked");
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={options}
      center={center}
      zoom={16}
    >
      <MarkerF
        position={{ lat: 6.821414316297818, lng: 80.04168018526603 }}
        icon={pinIcon}
        visible={true}
        onClick={markerClicked}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
