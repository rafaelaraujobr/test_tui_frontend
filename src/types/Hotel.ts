interface Hotel {
  hotelId: string;
  hotelName: string;
  totalPrice: { amount: number; currency: string };
  images: Array<{ url: string; source: string }>;
  region: string;
  room: string;
  starRating: number;
  geo: { latitude: number; longitude: number };
  country: string;
  city: string;
}
export default Hotel;
