import ImageHotel from "./ImageHotel";

interface Hotel {
  id: string;
  name: string;
  country: string;
  city: string;
  region: string;
  star_rating: number;
  images: Array<ImageHotel>;
  price_per_person: number;
  currency: string;
  adults: number;
  created_at: string;
}
export default Hotel;
