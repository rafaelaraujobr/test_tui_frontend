import ImageHotel from "./ImageHotel";

interface Hotel {
  hotelId: string;
  hotelName: string;
  totalPrice: { amount: number; currency: string };
  images: Array<ImageHotel>;
  region: string;
  room: string;
  starRating: number;
  geo: { latitude: number; longitude: number };
  country: string;
  city: string;
}
export default Hotel;
