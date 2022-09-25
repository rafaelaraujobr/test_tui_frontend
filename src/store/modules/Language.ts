import Language from "@/types/Language";
import { Commit } from "vuex";

export default {
  namespaced: true,
  state: {
    language: {
      code: "pt",
      name: "Português",
      flag: "portugal.png",
    } as Language,
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
      {
        code: "it",
        name: "Italiano",
        flag: "italy.png",
      },
    ] as Array<Language>,
  },
  getters: {
    language: (state: { language: Language }) => state.language,
    languageList: (state: { languageList: Array<Language> }) =>
      state.languageList || [],
  },
  mutations: {
    SET_LANGUAGE(state: { language: Language }, payload: Language) {
      state.language = payload;
    },
  },
  actions: {
    ActionSetLanguage({ commit }: { commit: Commit }, payload: Language) {
      commit("SET_LANGUAGE", payload);
    },
  },
};
