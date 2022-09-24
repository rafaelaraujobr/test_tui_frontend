import Hotel from "../../types/Hotel";
import { Commit } from "vuex";

export default {
  namespaced: true,
  state: {
    hotels: [] as Array<Hotel>,
  },
  getters: {
    hotels: (state: { hotels: Array<Hotel> }) => state.hotels || [],
  },
  mutations: {
    SET_HOTELS(state: { hotels: Array<Hotel> }, payload: Array<Hotel>) {
      state.hotels = payload;
    },
  },
  actions: {
    ActionSetHotels({ commit }: { commit: Commit }, payload: Array<Hotel>) {
      commit("SET_HOTELS", payload);
    },
  },
};
