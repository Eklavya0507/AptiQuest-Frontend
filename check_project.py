from pathlib import Path
import json
p=Path(__file__).resolve().parent
needed=["package.json","index.html","vite.config.js","capacitor.config.json","src/main.jsx",".env.android","public/icon-512.png",".github/workflows/build-android-apk.yml"]
for f in needed:
    assert (p/f).is_file(), f"Missing: {f}"
pkg=json.loads((p/"package.json").read_text(encoding="utf-8"))
cap=json.loads((p/"capacitor.config.json").read_text(encoding="utf-8"))
assert pkg["scripts"]["build:android"] and pkg["dependencies"]["@capacitor/android"]
assert cap["webDir"]=="dist" and cap["appId"]=="com.aptiquest.mindverse"
print("AptiQuest source package structure: OK")
print("Actual Android APK still needs GitHub Actions or Android SDK build.")
