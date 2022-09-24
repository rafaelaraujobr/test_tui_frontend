import { createStore } from "vuex";
import Hotel from "./modules/Hotel";

export default createStore({
  state: {
    language: {
      code: "pt",
      label: "Português",
      flag: "portugal.png",
    },
    languageList: [
      {
        code: "pt",
        name: "Português(PT)",
        flag: "portugal.png",
      },
      {
        code: "en-US",
        name: "English(US)",
        flag: "united-states.png",
      },
      {
        code: "es",
        name: "Español(ES)",
        flag: "spain.png",
      },
    ],
  },
  getters: {
    language: (state) => state.language,
    languageList: (state) => state.languageList,
  },
  mutations: {
    SET_LANGUAGE(state, language) {
      state.language = language;
    },
  },
  actions: {
    ActionSetLanguage({ commit }, language) {
      commit("SET_LANGUAGE", language);
    },
  },
  modules: {
    Hotel,
  },
});
