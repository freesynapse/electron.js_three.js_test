const electron = require('electron');
const { app, BrowserWindow } = electron;
app.commandLine.appendSwitch('ignore-gpu-blacklist');
app.commandLine.appendSwitch('disable-gpu');
app.commandLine.appendSwitch('disable-gpu-compositing');

var win;
// When Electron has finished initializing after import, run the window creation function
app.on('ready', function(){
    // Browser window actually creates the window (Create and control browser windows.)
    //win = new BrowserWindow({ 
    //    width: 1280, 
    //    height: 760, 
    //    title: 'electron test',
    //    nodeIntegration: true
    //});
    win = new BrowserWindow({ nodeIntegration: true, fullscreen: true });
 
    // Load the HTML file into the Window
    win.loadFile('index.html');
 
});

