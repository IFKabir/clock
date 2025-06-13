// main.js (Main Process)
import { app, BrowserWindow } from 'electron';

function createWindow() {
    const win = new BrowserWindow({
        width: 200,
        height: 100,
   resizable:false,
        maximizable: false,
        frame: false,
        fullscreen: false,     // no window frame (optional)
        transparent: true,
        alwaysOnTop: true,    // set true if you want it above other windows
        webPreferences: {
            nodeIntegration: true,   // allow require() in renderer (not needed here but set if needed)
            contextIsolation: false
        }
    });
    //fixes phantombar on windows 
    //check https://github.com/electron/electron/issues/39959
    win.loadFile('index.html');
     win.on("blur", () => {
  setTimeout(() => {
    win.setResizable(true);
    const [w, h] = win.getSize();
    win.setSize(w, h + 1);
    win.setSize(w, h);
    win.setResizable(false);
  }, 5000); // 5 seconds delay
});

win.on("focus", () => {
  setTimeout(() => {
    win.setResizable(true);
    const [w, h] = win.getSize();
    win.setSize(w, h + 1);
    win.setSize(w, h);
    win.setResizable(false);
  }, 5000); // 5 seconds delay
});

}

app.whenReady().then(createWindow);



// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
