const { app, BrowserWindow } = require('electron');
const { join } = require('path');

let win;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: join(__dirname, process.platform == 'win32' ? './whatsapp-web-electron.ico' : './whatsapp-web-electron.png')
    });
    win.loadURL('https://web.whatsapp.com/', {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:46.0) Gecko/20100101 Firefox/46.0'
    });
});