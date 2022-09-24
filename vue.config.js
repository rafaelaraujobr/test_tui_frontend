const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["quasar"],
  pwa: {
    name: "Tui stay",
    short_name: "Tui stay",
    themeColor: "#D40E14",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxOptions: {
      skipWaiting: true,
    },
    manifestOptions: {
      short_name: "Tui stay",
      background_color: "#000000",
      display: "standalone",
      description: "Hotéis e melhores destinos para tuas férias em 2022",
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title =
        "Tui - Hotéis e melhores destinos para tuas férias em 2022";
      return args;
    });
  },
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
    i18n: {
      locale: "pt",
      fallbackLocale: "pt",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
});
