import { createStore } from "vuex";

export default createStore({
  state: {
    language: {
      value: "pt",
      label: "Português",
      flag: "portugal.png",
    },
    languageList: [
      {
        value: "pt",
        label: "Português",
        flag: "portugal.png",
      },
      {
        value: "en-US",
        label: "English",
        flag: "united-states.png",
      },
      {
        value: "es",
        label: "Español",
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
  modules: {},
});
