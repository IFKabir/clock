// main.js (Main Process)
import { app, BrowserWindow } from "electron";

function createWindow() {
  const win = new BrowserWindow({
    width: 200,
    height: 100,
    resizable: false,
    maximizable: false,
    frame: false,
    fullscreen: false, // no window frame (optional)
    transparent: true,
    alwaysOnTop: true, // set true if you want it above other windows
    webPreferences: {
      nodeIntegration: true, // allow require() in renderer (not needed here but set if needed)
      contextIsolation: false,
    },
  });
  //fixes phantombar on windows
  //check https://github.com/electron/electron/issues/39959
  win.loadFile("index.html");

  let lastEventTimestamp = 0;

win.on("blur", () => {
  const eventTime = Date.now();
  lastEventTimestamp = eventTime;

  setTimeout(() => {
    // Only proceed if no newer event has occurred
    if (lastEventTimestamp === eventTime) {
      win.setResizable(true);
      const [w, h] = win.getSize();
      win.setSize(w, h + 1);
      win.setSize(w, h);
      win.setResizable(false);
    }
  }, 5000);
});

win.on("focus", () => {
  const eventTime = Date.now();
  lastEventTimestamp = eventTime;

  setTimeout(() => {
    // Only proceed if no newer event has occurred
    if (lastEventTimestamp === eventTime) {
      win.setResizable(true);
      const [w, h] = win.getSize();
      win.setSize(w, h + 1);
      win.setSize(w, h);
      win.setResizable(false);
    }
  }, 5000);
});

}

app.whenReady().then(createWindow);

// Quit when all windows are closed (except on macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
