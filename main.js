// main.js (Main Process)
import { app, BrowserWindow } from 'electron';

function createWindow() {
    const win = new BrowserWindow({
        width: 200,
        height: 100,
        frame: false,          // no window frame (optional)
        transparent: true,
        alwaysOnTop: false,    // set true if you want it above other windows
        webPreferences: {
            nodeIntegration: true,   // allow require() in renderer (not needed here but set if needed)
            contextIsolation: false
        }
    });
    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
