import Hotel from "../../types/Hotel";
import { Commit } from "vuex";
import FilterHotel from "@/types/FilterHotel";

export default {
  namespaced: true,
  state: {
    hotels: [] as Array<Hotel>,
    hotelFilter: {
      destinationType: "country",
      destinationId: "a2e354c1-e730-40ba-bce7-3d5c98f4f929",
      from: "2022-09-23",
    } as FilterHotel,
  },
  getters: {
    hotels: (state: { hotels: Array<Hotel> }) => state.hotels || [],
    hotelFilter: (state: { hotelFilter: FilterHotel }) => state.hotelFilter,
  },
  mutations: {
    SET_HOTELS(state: { hotels: Array<Hotel> }, payload: Array<Hotel>) {
      state.hotels = payload;
    },
    SET_HOTEL_FILTER(
      state: { hotelFilter: FilterHotel },
      payload: FilterHotel
    ) {
      Object.assign(state.hotelFilter, payload);
    },
  },
  actions: {
    ActionSetHotels({ commit }: { commit: Commit }, payload: Array<Hotel>) {
      commit("SET_HOTELS", payload);
    },
    ActionSetHotelFilter({ commit }: { commit: Commit }, payload: FilterHotel) {
      commit("SET_HOTEL_FILTER", payload);
    },
  },
};
