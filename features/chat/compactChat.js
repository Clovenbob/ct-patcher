/// <reference types="../../../CTAutocomplete" />
/// <reference lib="es2015" />

import Settings from "../../config.js";

let messages = [];
let lineId = 100;
let seconds = 0;

register("chat", (event) => {
  if (!Settings.compactChat) return;
  cancel(event);
  let newMessage = event.message.withChatLineId(lineId++);
  const message = event.message.toString(); // formattedMessage is broken and toString has the same functionality
  const index = messages.findIndex((msg) => msg.message === message);
  if (index !== -1) {
    ChatLib.deleteChat(messages[index].lineId - 1);
    newMessage = newMessage.withText(` &7(${messages[index].repeats++})`);
    messages[index].lineId = lineId;
    messages[index].time = seconds;
  } else {
    if (Settings.consecutiveCompactChat) messages = [];
    messages.push({
      message,
      time: seconds,
      repeats: 2,
      lineId,
    });
  }
  newMessage.chat();
})
  //this should prevent the stacking indicator from messing with other mods
  .setPriority(Priority.LOWEST)
  .triggerIfCanceled(false);

register("step", () => {
  seconds++;
  messages = messages.filter(
    (msg) => seconds - msg.time <= Settings.compactChatTime
  );
}).setDelay(1);
