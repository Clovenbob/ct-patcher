import "./features/chat";

import Settings from "./config.js";
register("command", () => {
  Settings.openGUI();
}).setName("patcher");
