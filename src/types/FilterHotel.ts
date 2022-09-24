interface FilterHotel {
  destinationId: string | Array<string>;
  destinationType: string;
  from: string | Array<string>;
  duration?: number;
  adults?: number;
}
export default FilterHotel;
