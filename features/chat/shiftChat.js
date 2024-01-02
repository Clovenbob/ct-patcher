/// <reference types="../../../CTAutocomplete" />
/// <reference lib="es2015" />

import Settings from "../../config.js";

const shift = Client.getKeyBindFromDescription("key.sneak").getKeyCode();

register("guiClosed", () => {
  if (!Settings.shiftChat) return;
  if (Client.isInChat() && Keyboard.isKeyDown(shift)) {
    Client.getMinecraft().send(() => Client.setCurrentChatMessage(""));
  }
});
