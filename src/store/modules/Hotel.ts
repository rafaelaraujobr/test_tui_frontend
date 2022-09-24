import { Commit } from "vuex";
import Hotel from "@/types/Hotel";
import FilterHotel from "@/types/FilterHotel";

export default {
  namespaced: true,
  state: {
    hotels: [] as Array<Hotel>,
    loadingHotel: false as boolean,
    modeGridHotel: false as boolean,
    dialogHotel: false as boolean,
    dialogFilterHotel: false as boolean,
    hotelFilter: {
      destinationType: "country",
      destinationId: "a2e354c1-e730-40ba-bce7-3d5c98f4f929",
      from: "2022-09-23",
    } as FilterHotel,
  },
  getters: {
    hotels: (state: { hotels: Array<Hotel> }) => state.hotels || [],
    hotelFilter: (state: { hotelFilter: FilterHotel }) => state.hotelFilter,
    loadingHotel: (state: { loadingHotel: boolean }) => state.loadingHotel,
    modeGridHotel: (state: { modeGridHotel: boolean }) => state.modeGridHotel,
    dialogHotel: (state: { dialogHotel: boolean }) => state.dialogHotel,
    dialogFilterHotel: (state: { dialogFilterHotel: boolean }) =>
      state.dialogFilterHotel,
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
    SET_LOADING_HOTEL(state: { loadingHotel: boolean }, payload: boolean) {
      state.loadingHotel = payload;
    },

    SET_MODE_GRID_HOTEL(state: { modeGridHotel: boolean }, payload: boolean) {
      state.modeGridHotel = payload;
    },

    SET_DIALOG_HOTEL(state: { dialogHotel: boolean }, payload: boolean) {
      state.dialogHotel = payload;
    },

    SET_DIALOG_FILTER_HOTEL(
      state: { dialogFilterHotel: boolean },
      payload: boolean
    ) {
      state.dialogFilterHotel = payload;
    },
  },
  actions: {
    ActionSetHotels({ commit }: { commit: Commit }, payload: Array<Hotel>) {
      commit("SET_HOTELS", payload);
    },
    ActionSetHotelFilter({ commit }: { commit: Commit }, payload: FilterHotel) {
      commit("SET_HOTEL_FILTER", payload);
    },
    ActionSetLoadingHotel({ commit }: { commit: Commit }, payload: boolean) {
      commit("SET_LOADING_HOTEL", payload);
    },
    ActionSetModeGridHotel({ commit }: { commit: Commit }, payload: boolean) {
      commit("SET_MODE_GRID_HOTEL", payload);
    },
    ActionSetDialogHotel({ commit }: { commit: Commit }, payload: boolean) {
      commit("SET_DIALOG_HOTEL", payload);
    },
    ActionSetDialogFilterHotel(
      { commit }: { commit: Commit },
      payload: boolean
    ) {
      commit("SET_DIALOG_FILTER_HOTEL", payload);
    },
  },
};
