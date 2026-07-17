#!/bin/bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

export CSC_IDENTITY_AUTO_DISCOVERY=false

echo "==> Building macOS app (arm64 + x64 universal)..."
./node_modules/.bin/electron-builder --mac dir --universal

APP="$ROOT/dist/mac-universal/ExecOps Digital Systems.app"
if [[ ! -d "$APP" ]]; then
  # Fallback if universal folder naming differs
  APP="$(find "$ROOT/dist" -maxdepth 2 -type d -name "ExecOps Digital Systems.app" | head -1)"
fi

if [[ ! -d "$APP" ]]; then
  echo "ERROR: built .app not found"
  exit 1
fi

echo "==> Ad-hoc signing and clearing quarantine..."
xattr -cr "$APP" || true
codesign --force --deep --sign - --identifier "ph.edu.parsu.execops.digitalsystems" "$APP"

echo "==> Preparing DMG contents..."
STAGE="$ROOT/dist/dmg-stage"
rm -rf "$STAGE"
mkdir -p "$STAGE"
cp -R "$APP" "$STAGE/"
cp "$ROOT/build/Install and Open.command" "$STAGE/"
chmod +x "$STAGE/Install and Open.command"
ln -s /Applications "$STAGE/Applications"

DMG="$ROOT/dist/ExecOps-Digital-Systems-Mac.dmg"
rm -f "$DMG" "$DMG.blockmap"

echo "==> Creating DMG..."
hdiutil create \
  -volname "ExecOps Digital Systems" \
  -srcfolder "$STAGE" \
  -ov \
  -format UDZO \
  "$DMG"

xattr -cr "$DMG" || true

echo "==> Building Windows x64 installer..."
./node_modules/.bin/electron-builder --win nsis --x64

echo "==> Done"
ls -lh "$ROOT/dist/ExecOps-Digital-Systems-Mac.dmg" "$ROOT/dist/ExecOps-Digital-Systems-Windows-Setup.exe"
