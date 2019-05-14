const { app, BrowserWindow } = require('electron');

let win;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadURL('https://web.whatsapp.com/', {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:46.0) Gecko/20100101 Firefox/46.0'
    });
});