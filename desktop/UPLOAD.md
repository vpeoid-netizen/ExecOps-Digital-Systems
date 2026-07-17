# Publish desktop installers (one-time)

Installers are already built on this Mac:

- `desktop/dist/ExecOps-Digital-Systems-Mac.dmg`
- `desktop/dist/ExecOps-Digital-Systems-Windows-Setup.exe`

## Upload to GitHub (required for website download buttons)

1. Open: https://github.com/vpeoid-netizen/ExecOps-Digital-Systems/releases/new
2. Choose existing tag: **desktop-v1.0.0**
3. Release title: **Desktop Apps v1.0.0**
4. Attach both files from the `desktop/dist` folder
5. Click **Publish release**

Website download links:

- macOS: https://github.com/vpeoid-netizen/ExecOps-Digital-Systems/releases/latest/download/ExecOps-Digital-Systems-Mac.dmg
- Windows: https://github.com/vpeoid-netizen/ExecOps-Digital-Systems/releases/latest/download/ExecOps-Digital-Systems-Windows-Setup.exe

## Optional: publish from Terminal

```bash
cd desktop
python3 publish-release.py
```
