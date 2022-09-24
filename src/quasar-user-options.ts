import "./styles/quasar.sass";
import lang from "quasar/lang/pt.js"; // Quasar language pt, es, en-US, etc.
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-symbols-outlined/material-symbols-outlined.css";
import { AddressbarColor } from "quasar";

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: { AddressbarColor },
  lang: lang,
};
