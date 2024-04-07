export interface IPlace {
  name: string;
  location: string;
  price: number;
  description: string;
  latitude: number;
  longitude: number;
  userEmail: string;
}

export interface IRequest {
  accommodation: string;
  owner: string;
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export interface MapProps {
  center?: google.maps.LatLngLiteral;
  zoom?: number;
  onClick?: (event: google.maps.MapMouseEvent) => void;
  selectedLocation?: google.maps.LatLngLiteral;
  places?: {
    description: string;
    name: string;
    latitude: number;
    longitude: number;
  }[];
  houses?: { latitude: number; longitude: number }[];
}
