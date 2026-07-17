const { app, BrowserWindow, shell, dialog } = require("electron");
const path = require("path");

const APP_URL =
  process.env.APP_URL || "https://exec-ops-digital-systems.vercel.app";

/** @type {BrowserWindow | null} */
let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 840,
    minWidth: 900,
    minHeight: 600,
    title: "Executive Operations Digital Systems",
    backgroundColor: "#071f46",
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  mainWindow.once("ready-to-show", () => {
    mainWindow?.show();
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow.webContents.on("will-navigate", (event, url) => {
    try {
      const allowedOrigin = new URL(APP_URL).origin;
      if (!url.startsWith(allowedOrigin)) {
        event.preventDefault();
        shell.openExternal(url);
      }
    } catch {
      // Keep navigation if URL parsing fails unexpectedly.
    }
  });

  mainWindow.webContents.on("did-fail-load", (_event, errorCode, errorDescription) => {
    if (!mainWindow || errorCode === -3) return;
    dialog.showMessageBox(mainWindow, {
      type: "error",
      title: "Unable to load portal",
      message: "ExecOps Digital Systems could not connect to the online portal.",
      detail: `${errorDescription}\n\nCheck your internet connection, then reopen the app.\n\nPortal: ${APP_URL}`,
    });
  });

  mainWindow.loadURL(APP_URL);
}

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
