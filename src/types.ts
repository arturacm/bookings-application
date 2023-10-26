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
