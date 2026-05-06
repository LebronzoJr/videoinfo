const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow } = electron;
const remote = require ('@electron/remote/main');
remote.initialize();
// const app = electron.app;

app.on('ready', ()=>{
    console.log("App is ready");
    const mainWindow = new BrowserWindow({
        height:800,
        width:600,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule:true,
        }
    });
    remote.enable(mainWindow.webContents);
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});
//npm install electron
//npm install @electron/remote
//npm install fluent-ffmpeg