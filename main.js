const { app, BrowserWindow} = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 400,
        height: 400
    });
    win.loadURL(`file://${__dirname}/out/angular-electron-package/index.html`);
}

app.whenReady().then(()=>{
    createWindow();
})


app.on('window-all-closed',()=>{
    if(process.platform != `darwin`){
        app.quit();
    }
})