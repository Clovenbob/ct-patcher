/// <reference types="../../../CTAutocomplete" />
/// <reference lib="es2015" />

import Settings from "../../config.js";

let messageQueue = [];
let isSending = false;

function delayMessages() {
  if (messageQueue.length === 0) {
    isSending = false;
    return;
  }

  isSending = true;
  checkSent.unregister();
  ChatLib.say(messageQueue.shift());
  checkSent.register();

  setTimeout(delayMessages, Settings.chatDelay * 1000);
}

const checkSent = register("messageSent", (message, event) => {
  if (Settings.chatDelay === 0) return;
  if (message.startsWith("/")) return;

  cancel(event);
  messageQueue.push(message);
  if (!isSending) delayMessages();
});
