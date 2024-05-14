
const electron = require('electron');
const { app, BrowserWindow } = electron;

var win;

// When Electron has finished initializing after import, run the window creation function
app.on('ready', () => {
    // Browser window actually creates the window (Create and control browser windows.)
    win = new BrowserWindow({ 
        webPreferences: {
            nodeIntegration: true,
        },
        width: 1280, 
        height: 760, 
        title: 'electron test',
        fullscreen: true,
    });
    // win = new BrowserWindow({ nodeIntegration: true, fullscreen: true });
 
    // Load the HTML file into the Window
    win.loadFile('index.html');
 
});

//
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

