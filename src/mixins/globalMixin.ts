import { mapActions, mapGetters } from "vuex";
export const globalMixin = {
  methods: {
    ...mapActions("Language", ["ActionSetLanguage"]),

    toCurrency(
      number: number,
      currency = "BRL",
      locale = "pt-BR",
      minimumFractionDigits = 2
    ): string {
      const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits,
      });
      return formatter.format(number);
    },
  },
  computed: {
    ...mapGetters("Language", ["language", "languageList"]),
    isMobile(): boolean {
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
          ? true
          : false;
      const isMobileWidth = window.innerWidth < 600 ? true : false;
      return isMobile || isMobileWidth;
    },
  },
};
