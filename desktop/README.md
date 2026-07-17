# Desktop app for Executive Operations Digital Systems

This Electron shell opens the live portal:

https://exec-ops-digital-systems.vercel.app

## Develop locally

```bash
cd desktop
npm install
npm start
```

## Build installers

```bash
# macOS (.dmg)
npm run dist:mac

# Windows (.exe) — best run on Windows or via GitHub Actions
npm run dist:win
```

Installers are published automatically by GitHub Actions when a tag like `desktop-v1.0.0` is pushed.
