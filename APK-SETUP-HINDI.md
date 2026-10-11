# AptiQuest Mindverse V2 — APK banaakar dost ko bhejna

**Is ZIP mein APK abhi nahi hai.** Yeh *APK-ready source project* hai. GitHub Actions se Android debug APK banega. Yeh testing/share karne ke liye hai, Play Store release ke liye signed production APK/AAB alag banana hota hai.

## Part 1 — VS Code par game check karo

1. ZIP pe right-click -> Extract All. Jo folder nikle usi ko VS Code mein File > Open Folder se kholo. `package.json` left Explorer mein directly visible hona chahiye.
2. Terminal > New Terminal.
3. Commands (ek-ek karke):

```powershell
npm install
npm run dev
```

4. Browser mein terminal ka diya localhost URL kholo (usually http://localhost:5173/).
5. Agar `ENOENT package.json` aaye, wrong folder hai. `dir package.json` se check karo.

## Part 2 — Group GitHub repository par upload

1. GitHub par group/organization select karo. Group ke under EMPTY repository banao: `AptiQuest-Frontend`. Repo public rakhna simple hai; private bhi possible hai agar organization Actions allow karti ho.
2. Ab VS Code terminal project ke us root mein open karo jahan `package.json` hai.
3. Commands:

```powershell
git init
git branch -M main
git add .
git commit -m "Add AptiQuest Android APK builder"
git remote add origin https://github.com/YOUR_GROUP_ID/AptiQuest-Frontend.git
git push -u origin main
```

Replace `YOUR_GROUP_ID` with **GROUP/ORGANIZATION OWNER**, not your personal ID. Group repository par write access zaroori hai.

Agar `remote origin already exists` aaye:

```powershell
git remote set-url origin https://github.com/YOUR_GROUP_ID/AptiQuest-Frontend.git
git push -u origin main
```

Agar purana repo already created hai to `git init` repeat zaroori nahi; new files copy karke `git add .`, `git commit -m "Android APK support"`, `git push` karo.

## Part 3 — GitHub se APK generate karo (Android Studio ke bina)

1. Repository open karo: https://github.com/YOUR_GROUP_ID/AptiQuest-Frontend
2. Top **Actions** tab -> left **Build Android APK - AptiQuest** workflow.
3. Pehla `git push` par workflow **automatically start** hota hai. Ya **Run workflow** -> `main` -> **Run workflow** use karo.
4. Android build green check aane tak wait karo. First build ko kuch minutes lag sakte hain. Build failures aaye to Actions job ka error screenshot bhejo.
5. Completed run open karo -> neeche **Artifacts** heading -> **AptiQuest-Installable-APK** download karo.
6. Download ki ZIP extract karo. Andar **app-debug.apk** file milegi.

**Important:** Actions tab disabled ho to group/organization admin ko enable karna hoga. `workflow_dispatch` trigger first push ke baad default branch par available hota hai.

## Part 4 — Dost ko APK bhejo

1. `app-debug.apk` ka naam optional `AptiQuest-Demo.apk` rakh sakte ho (sirf filename change; app identity nahi).
2. WhatsApp mein **Document** attachment se bhejo; photo/video attachment se nahi. Agar WhatsApp `.apk` bhejne se block kare, Google Drive link / Telegram **File** se send karo.
3. Dost Android phone par file download kare, open kare, aur trusted source ke liye "Allow from this source" prompt ko *sirf tab* allow kare jab tumhare APK par trust karta ho. Install tap kare.
4. Debug APK Play Store par upload karne layak release build nahi hai. Play Store ke liye release signing, privacy review, etc. alag steps hain.

## Part 5 — Kya kaam karega? Kya nahi?

APK ke andar local React game/demo bundle hoga. App open karke courses, quizzes, Math Sprint aur baaki local games test ho sakte hain. **Real two-phone multiplayer, server login, AI videos, actual institute leaderboard aur official certificate verification abhi nahi chalenge.** Ye frontend demo ka wrapper hai.

## Common problems

- `ENOENT package.json`: VS Code mein galat folder. Explorer mein `package.json` hona chahiye.
- `Run workflow` button missing: file `main` branch par push karo, Actions permission check karo.
- APK zip download link missing: pehle successful workflow run finish hona chahiye.
- Installation fails: old AptiQuest APK uninstall karo (local data remove ho sakta hai) and retry; check Android OS requirement.
- Android app shows white screen: Actions job logs bhejo; local build `npm run build:android` check karo.

## Optional: PC mein Android Studio se build

```powershell
npm install
npm run build:android
npx cap add android
npx cap sync android
npx cap open android
```

Android Studio mein Build > Build APK(s). Generated debug APK path usually `android/app/build/outputs/apk/debug/app-debug.apk`.

## Why an APK can be shared

Android `assembleDebug` build automatically debug signing karta hai; file sideload karke friends test kar sakte hain. Public/store distribution ke liye production signing chahiye.
