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
