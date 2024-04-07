import { useState } from "react";
import { MapProps } from "@/interfaces";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

const Map = ({
  zoom = 10,
  onClick,
  selectedLocation,
  places,
  houses,
}: MapProps) => {
  const center = { lat: 6.821456927849568, lng: 80.04150852388756 };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDfd43AVuZ-MC7bx0nrfSaVKYLN2WBN_yI",
  });

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const handleMarkerClick = (marker: any) => {
    setShowCard((prev) => (selectedMarker === marker ? !prev : true));
    setSelectedMarker(marker);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onClick={onClick}
      options={options}
    >
      {places &&
        places.map((place, index) => (
          <MarkerF
            key={index}
            onClick={() => handleMarkerClick(place)}
            icon={{
              url: "/assets/marker.png",
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            position={{ lat: place.latitude, lng: place.longitude }}
          />
        ))}

      {houses &&
        houses.map((house, index) => (
          <MarkerF
            key={index}
            onClick={() => {
              handleMarkerClick(house);
            }}
            icon={{
              url: "/assets/marker.png",
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            position={{ lat: house.latitude, lng: house.longitude }}
          />
        ))}

      {selectedMarker && showCard && (
        <div
          className="top-0 left-0  shadow-lg"
          style={{
            position: "absolute",
            padding: "10px",
            zIndex: 999,
          }}
        >
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>{(selectedMarker as any)?.name}</CardTitle>
              <CardDescription>
                {(selectedMarker as any)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Price:</strong> Rs:{(selectedMarker as any)?.price}
              </p>
              <p>
                <strong>Address:</strong> {(selectedMarker as any)?.location}
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedLocation && <MarkerF position={selectedLocation} />}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
