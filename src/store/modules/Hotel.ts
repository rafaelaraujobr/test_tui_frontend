import { Commit } from "vuex";
import Hotel from "@/types/Hotel";
import FilterHotel from "@/types/FilterHotel";
import Pagination from "@/types/Pagination";

export default {
  namespaced: true,
  state: {
    hotels: [] as Array<Hotel>,
    hotelFilter: {} as FilterHotel,
    searchHotel: "" as string,
    paginationHotel: {
      sortBy: "desc",
      descending: true,
      total: 0,
      pages: 1,
      orderBy: "created_at",
      page: 1,
      rowsPerPage: 6,
    } as Pagination,
    loadingHotel: false as boolean,
    modeGridHotel: false as boolean,
    dialogHotel: false as boolean,
    dialogFilterHotel: false as boolean,
  },
  getters: {
    hotels: (state: { hotels: Array<Hotel> }) => state.hotels || [],
    searchHotel: (state: { searchHotel: string }) => state.searchHotel || "",
    hotelFilter: (state: { hotelFilter: FilterHotel }) => state.hotelFilter,
    paginationHotel: (state: { paginationHotel: Pagination }) =>
      state.paginationHotel as Pagination,
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
    SET_SEARCH_HOTEL(state: { searchHotel: string }, payload: string) {
      state.searchHotel = payload;
    },
    SET_HOTEL_FILTER(
      state: { hotelFilter: FilterHotel },
      payload: FilterHotel
    ) {
      Object.assign(state.hotelFilter, payload);
    },
    SET_PAGINATION_HOTEL(
      state: { paginationHotel: Pagination },
      payload: Pagination
    ) {
      Object.assign(state.paginationHotel, payload);
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
    ActionSetSearchHotel({ commit }: { commit: Commit }, payload: string) {
      commit("SET_SEARCH_HOTEL", payload);
    },
    ActionSetHotelFilter({ commit }: { commit: Commit }, payload: FilterHotel) {
      commit("SET_HOTEL_FILTER", payload);
    },
    ActionSetPaginationHotel(
      { commit }: { commit: Commit },
      payload: Pagination
    ) {
      commit("SET_PAGINATION_HOTEL", payload);
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
    ActionSetTotalHotel({ commit }: { commit: Commit }, payload: number) {
      commit("SET_TOTAL_HOTEL", payload);
    },
    ActionSetDialogFilterHotel(
      { commit }: { commit: Commit },
      payload: boolean
    ) {
      commit("SET_DIALOG_FILTER_HOTEL", payload);
    },
  },
};
