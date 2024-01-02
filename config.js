import { @SliderProperty, @SwitchProperty, @SelectorProperty, @Vigilant } from 'Vigilance';

@Vigilant("patcher", "Patcher Config", {
  getCategoryComparator: () => (a, b) => {
    const categories = ["Chat", "Misc"];

    return categories.indexOf(a.name) - categories.indexOf(b.name);
  },
  getSubcategoryComparator: () => (a, b) => {
    const subcategories = ["Compact Chat", "Chat Timestamps", "Menu", "Misc"];

    return subcategories.indexOf(a.getValue()[0].attributesExt.subcategory) -
        subcategories.indexOf(b.getValue()[0].attributesExt.subcategory);
},
})
class Settings {
  @SwitchProperty({
    name: "Compact Chat",
    description: "Clean up the chat by stacking duplicate messages.",
    category: "Chat",
    subcategory: "Compact Chat",
  })
  compactChat = false;

  @SwitchProperty({
    name: "Consecutive Compact Chat",
    description: "Only compact messages if they're consecutive.",
    category: "Chat",
    subcategory: "Compact Chat",
  })
  consecutiveCompactChat = false;

  @SliderProperty({
    name: "Compact Chat Time",
    description: "Change the amount of time old messages take to stop being compacted.\n&eMeasured in seconds.",
    category: "Chat",
    subcategory: "Compact Chat",
    min: 1,
    max: 120,
  })
  compactChatTime = 30;
  @SwitchProperty({
    name: "Shift Chat",
    description: "Keep chat open while sending a message if Shift is held while pressing Enter.",
    category: "Chat",
    subcategory: "Menu",
  })
  shiftChat = false;

  @SwitchProperty({
    name: "Chat Timestamps",
    description: "Add timestamps before a message.",
    category: "Chat",
    subcategory: "Chat Timestamps",
  })
  chatTimestamps = false;

  @SwitchProperty({
    name: "Show Seconds on Timestamps.",
    description: "Show the seconds on a timestamped message.",
    category: "Chat",
    subcategory: "Chat Timestamps",
  })
  chatTimestampsSeconds = false;

  @SelectorProperty({
    name: "Chat Timestamps Format",
    description: "Change the time format of Chat Timestamps.",
    category: "Chat",
    subcategory: "Chat Timestamps",
    options: ["12 Hour", "24 Hour"],

  })
  chatTimestampsFormat = 0;

  @SelectorProperty({
    name: "Chat Timestamps Style",
    description: "Choose how Chat Timestamps should appear.",
    category: "Chat",
    subcategory: "Chat Timestamps",
    options: ["Always Present", "Message Hover"],
  })
  chatTimestampsStyle = 0;

  @SliderProperty({
    name: "Chat Delay",
    description: "Delay chat messages if they're sent witin the selected timeframe after the previous message.\n&eMeasured in seconds.",
    category: "Chat",
    subcategory: "Misc",
    min: 0,
    max: 6,
  })
  chatDelay = 0;

  @SwitchProperty({
    name: "Remove Blank Messages",
    description: "Stop messages with no content from showing up in chat.",
    category: "Chat",
    subcategory: "Misc",
  })
  removeBlankMessages = false;

  constructor() {
    this.initialize(this);
  }
}

export default new Settings();

