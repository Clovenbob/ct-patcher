/// <reference types="../../../CTAutocomplete" />
/// <reference lib="es2015" />

import Settings from "../../config.js";

register("chat", (event) => {
  if (!Settings.removeBlankMessages) return;
  cancel(event);
})
  .setCriteria(/^\s*$/)
  .setFormatted(false);
