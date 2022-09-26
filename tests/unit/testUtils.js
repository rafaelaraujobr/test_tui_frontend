// import { createLocalVue } from "@vue/test-utils";
import { createI18n } from "vue-i18n";

import localesPt from "@/locales/pt";
const pt = { pt: localesPt };

export default createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "pt",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "pt",
  messages: pt,
  silentTranslationWarn: true,
});
