#!/usr/bin/env python3
"""Create GitHub release and upload desktop installers."""
import json
import os
import subprocess
import sys
import urllib.error
import urllib.request

OWNER = "vpeoid-netizen"
REPO = "ExecOps-Digital-Systems"
TAG = "desktop-v1.0.0"
ASSETS_DIR = os.path.join(os.path.dirname(__file__), "dist")
FILES = [
    "ExecOps-Digital-Systems-Mac.dmg",
    "ExecOps-Digital-Systems-Windows-Setup.exe",
]


def get_token() -> str:
    proc = subprocess.run(
        ["git", "credential", "fill"],
        input="protocol=https\nhost=github.com\n\n",
        text=True,
        capture_output=True,
        check=False,
    )
    for line in proc.stdout.splitlines():
        if line.startswith("password="):
            return line.split("=", 1)[1]
    raise SystemExit("Could not read GitHub credentials from git.")


def main() -> None:
    token = get_token()
    print(f"token_ok len={len(token)}")
    api = f"https://api.github.com/repos/{OWNER}/{REPO}"
    headers = {
        "Authorization": f"Bearer {token}",
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "execops-desktop-release",
    }

    release = None
    req = urllib.request.Request(f"{api}/releases/tags/{TAG}", headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            release = json.load(response)
            print("release_exists", release.get("id"))
    except urllib.error.HTTPError as err:
        if err.code != 404:
            raise
        body = json.dumps(
            {
                "tag_name": TAG,
                "name": "Desktop Apps v1.0.0",
                "body": (
                    "Desktop installers for **Executive Operations Digital Systems**.\n\n"
                    "- **macOS:** `ExecOps-Digital-Systems-Mac.dmg`\n"
                    "- **Windows:** `ExecOps-Digital-Systems-Windows-Setup.exe`\n\n"
                    "The app opens the live portal. Linked systems open in your default browser."
                ),
                "draft": False,
                "prerelease": False,
            }
        ).encode()
        create_req = urllib.request.Request(
            f"{api}/releases",
            data=body,
            headers={**headers, "Content-Type": "application/json"},
            method="POST",
        )
        with urllib.request.urlopen(create_req) as response:
            release = json.load(response)
            print("release_created", release.get("id"))

    assert release is not None
    upload_url = release["upload_url"].split("{", 1)[0]

    existing = {asset["name"]: asset["id"] for asset in release.get("assets", [])}
    for name in FILES:
        asset_id = existing.get(name)
        if asset_id:
            delete_req = urllib.request.Request(
                f"{api}/releases/assets/{asset_id}",
                headers=headers,
                method="DELETE",
            )
            urllib.request.urlopen(delete_req)
            print("deleted_old", name)

        path = os.path.join(ASSETS_DIR, name)
        with open(path, "rb") as handle:
            data = handle.read()
        upload_req = urllib.request.Request(
            f"{upload_url}?name={name}",
            data=data,
            headers={
                **headers,
                "Content-Type": "application/octet-stream",
                "Content-Length": str(len(data)),
            },
            method="POST",
        )
        with urllib.request.urlopen(upload_req) as response:
            uploaded = json.load(response)
            print("uploaded", name, uploaded.get("browser_download_url"))

    print("all_done")


if __name__ == "__main__":
    try:
        main()
    except urllib.error.HTTPError as err:
        print("http_error", err.code, err.read()[:500], file=sys.stderr)
        raise
