# AptiQuest Android APK — START HERE

## Status

This is a **build-ready source project**, **not a compiled `.apk`**. All game frontend source files, Android app configuration, launcher icons and GitHub Actions build workflow are included.

## FASTEST METHOD: Build APK online with your group GitHub account

1. Download and extract this ZIP. Open **AptiQuest-APK-Builder-Final** in VS Code. `package.json` must be visible at the top level (not in a nested folder).
2. In GitHub, create an **empty repo** `AptiQuest-Frontend` **under your group's GitHub organization**. Leave README/.gitignore/license unselected when creating it.
3. Open VS Code > Terminal > New Terminal; run commands one by one:

```powershell
dir package.json
git init
git branch -M main
git add .
git commit -m "Build AptiQuest Android APK"
git remote add origin https://github.com/YOUR_GROUP_NAME/AptiQuest-Frontend.git
git push -u origin main
```

**Replace `YOUR_GROUP_NAME` with the EXACT GitHub organization username.** `git remote -v` shows the destination. If it prints the wrong GitHub owner, correct it using `git remote set-url origin https://github.com/YOUR_GROUP_NAME/AptiQuest-Frontend.git` before pushing. You need permission to push to the group repo.

4. Go to **the group repo → Actions**. On the first push to `main`, **Build Android APK - AptiQuest** starts automatically (if Actions are enabled). Otherwise choose that workflow and click **Run workflow**. If GitHub asks you to enable workflows, enable them; group admins may need to allow Actions.
5. Wait for a **green check**. Open the run → scroll to **Artifacts** → download **AptiQuest-Installable-APK**. GitHub ordinarily provides this as a ZIP. Extract it and find **app-debug.apk**.
6. Send the `.apk` to your friend with **Google Drive link**, **Telegram file**, or WhatsApp Document if allowed. On their Android phone, open the APK and confirm installation from a trusted source.

IMPORTANT: GitHub needs an internet connection and first-run Android dependencies can take several minutes. A green check is required before the APK exists. If the workflow fails, send its **first red error** or screenshot to ChatGPT.

## Run locally to test the game before making APK

```powershell
npm install
npm run dev
```

Open URL shown in the terminal (often http://localhost:5173/). For Android web assets only: `npm run build:android`.

## Already uploaded to GitHub?

Don't re-run `git init` or add a second remote. Copy/replace this source in your cloned repo and run:

```powershell
git status
git add .
git commit -m "Add AptiQuest Android APK builder"
git push origin main
```

If there is no change to commit but no APK workflow has run, use **Actions → Build Android APK - AptiQuest → Run workflow**. Ensure `.github/workflows/build-android-apk.yml` is in the group repository's `main` branch.

## What this testing APK can do

- Install and run the included AptiQuest Mindverse gaming frontend on compatible Android phones.
- Run local lessons, sample quizzes, solo math/logic/tables and starter Sudoku, local XP and demo rewards.
- App includes local web assets; it does **not** need your VS Code server to launch.

## What it cannot do yet

No actual friend-vs-friend online multiplayer, cloud accounts, shared live leaderboard, AI-generated lessons/videos, or authoritative/verified certificates. Those require a deployed backend and further implementation. **Login in this frontend is a local demo and is NOT real authentication.**

## Notes

- A debug APK is meant for trusted testers, not Play Store production release.
- Debug APK signing may change between GitHub runner builds; testers may have to uninstall an older debug version before installing a new one (this can delete local demo progress).
- Use only your own test data, not real passwords or sensitive student information.
- APK version is generated from the project's `com.aptiquest.mindverse` app ID. Do not switch this ID casually if you want updates to the same app.
- GitHub Pages is **optional** and separate from APK. The Pages workflow can be manually triggered after enabling Pages in repo settings.
