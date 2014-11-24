var { Hotkey } = require("sdk/hotkeys");
var clipboard = require("sdk/clipboard");
var tabs = require('sdk/tabs');

var copyHotKey = Hotkey({
  combo: "accel-alt-c",
  onPress: function() {
    clipboard.set(tabs.activeTab.title + " " + tabs.activeTab.url); 
  }
});
