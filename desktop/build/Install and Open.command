#!/bin/bash
# Double-click this file after mounting the DMG if macOS says the app is damaged/broken.
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
APP_SRC="$DIR/ExecOps Digital Systems.app"
APP_DEST="/Applications/ExecOps Digital Systems.app"

if [[ ! -d "$APP_SRC" ]]; then
  osascript -e 'display dialog "Could not find ExecOps Digital Systems.app next to this installer script.\n\nMake sure you opened the DMG and kept both files together." buttons {"OK"} default button 1 with icon stop'
  exit 1
fi

osascript -e 'display dialog "This will install ExecOps Digital Systems to your Applications folder and clear the macOS quarantine flag so the app can open." buttons {"Cancel", "Install"} default button 2'

rm -rf "$APP_DEST"
cp -R "$APP_SRC" "$APP_DEST"

# Fix the common macOS "app is damaged / broken" Gatekeeper message for unsigned builds.
xattr -cr "$APP_DEST" || true
codesign --force --deep --sign - "$APP_DEST" >/dev/null 2>&1 || true

open "$APP_DEST"

osascript -e 'display dialog "ExecOps Digital Systems was installed and opened.\n\nYou can eject the DMG now." buttons {"OK"} default button 1'
