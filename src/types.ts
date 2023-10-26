export type Location = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

export type LocationState = {
  locations: Location[];
  selectedLocation: number | null;
};

export type Reservation = {
  id: string;
  customerName: string;
  checkIn: string;
  checkOut: string;
  locationId: number;
};

export type ReservationPayload = Omit<Reservation, 'id'>