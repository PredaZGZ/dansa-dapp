const {contextBridge, ipcRenderer} = require("electron");

const validChannels  = ['user-data'];

console.log("Electron Api Ready!");

contextBridge.exposeInMainWorld('electronAPI', {
    sendData: (channel, data) => {
        if(validChannels.includes(channel)){
            ipcRenderer.send(channel, data);
        }
    },
    close: () => {
        ipcRenderer.send("close");
    },
    min: () => {
        ipcRenderer.send("min");
    },
    max: () => {
        ipcRenderer.send("max");
    }
})