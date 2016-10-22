const {app, BrowserWindow} = require('electron');
let win;

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(`file://${__dirname}/index.html`);
    win.on('closed', () => {
        win = null;
    });
}

// create window when app starts
app.on('ready', createWindow);

// kill process when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// create window if app is activated (i.e. clicking on dock icon in OSX)
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
