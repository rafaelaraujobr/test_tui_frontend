interface Hotel {
  id: string;
  name: string;
  country: string;
  city: string;
  region: string;
  star_rating: number;
  images: Array<{ url: string }>;
  price_per_person: number;
  currency: string;
  adults: number;
  created_at: string;
}
export default Hotel;
