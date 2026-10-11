# FIRST: [START-HERE-APK-HINDI.md](START-HERE-APK-HINDI.md) — APK steps for group GitHub.

# Android APK support added

**Want an APK to share with friends?** See **[APK-SETUP-HINDI.md](APK-SETUP-HINDI.md)** first. The file `.github/workflows/build-android-apk.yml` builds an installable Android debug APK using GitHub Actions. This ZIP contains **APK-ready source**, not a prebuilt APK.

---

# AptiQuest — Mindverse Arcade V2 frontend demo

An interactive **Learning + Brain Gaming** web app built with **React, Vite, and CSS**. It is mobile-responsive and can be installed from the browser as a PWA on supported devices. Designed for both personal GitHub accounts and **organization/group GitHub repositories**.

> **This is a FRONTEND DEMO, not a production app.** No real accounts, remote database, real multiplayer, AI video generation, institute verification, messaging, or server-side exam validation are included. Demo scores and profile information are stored in browser localStorage. Do not use real passwords or private student information.

## V2: Game-like UI upgrade

- New **Game Hub** with animated brain-core hero, player level / XP / coins / streak HUD
- Two adventure worlds: **Learning Quest** + **Brain Arena**
- Starter quest board, chapter path and arcade game launch cards
- New arcade-style Arena with featured challenge, four game mode tiles, scoreboard preview
- Gaming-themed onboarding, sidebar, HUD, button and battle screen styling
- All original learning, quiz, certificate and local mini-game flows remain intact

## Included features

- Responsive dashboard, navigation, profile editor, demo sign-in
- All six initial aptitude courses
- Lesson viewer and starter content (Percentages has concrete sample notes; other courses are introductory placeholders)
- Interactive practice and final MCQ quizzes with answer explanations, results and local progress
- Demo certificates (print or save as PDF through browser)
- Four playable brain games: Math Sprint, Tables Challenge, Logic Duel, Sudoku
- Solo challenges and a **simulated** 1v1 bot (NOT real multiplayer)
- Local XP, coins, streak display, badges
- Example leaderboard with a locally generated user row
- Community/tournaments roadmap screens and simulated admin console
- GitHub Pages GitHub Actions workflow and auto-detected repository base path
- PWA manifest and basic offline static caching for previously loaded pages

## Run locally on Windows (VS Code)

Install **Node.js LTS** and Git, then open the `AptiQuest-Frontend` folder in VS Code.

Open VS Code Terminal > New Terminal (PowerShell), then:

```powershell
npm install
npm run dev
```

Open the URL shown by Vite (usually `http://localhost:5173/`).

Build/test before sharing:

```powershell
npm run build
npm run preview
```

> This starter ships without a lockfile because packages could not be fetched in the creation environment. Running `npm install` locally will generate `package-lock.json`; commit it for reproducible team builds. The workflow currently uses `npm install` until a lockfile is committed, then you may change it to `npm ci`.

## Upload to a GROUP GitHub account / organization

1. GitHub > switch to your **organization/group account** (do not confuse it with your personal user account). The organization owner must allow creating repos and GitHub Actions/Pages.
2. Create a new **public** repository named `AptiQuest-Frontend` under the intended organization, **without** initializing with a README.
3. In the project folder, open VS Code terminal and run:

```powershell
git init
git branch -M main
git add .
git commit -m "Initial AptiQuest frontend"
git remote add origin https://github.com/YOUR_ORG_NAME/AptiQuest-Frontend.git
git push -u origin main
```

Replace `YOUR_ORG_NAME` with **the group/organization's GitHub handle**, not your personal username. If you already have a `git` repo/remote, do not rerun `git init`: inspect `git remote -v` and set the correct remote with `git remote set-url origin ...`.

> If creating the repository in GitHub's web interface with an initial README, you may need to clone the new repo before copying files, or reconcile histories. Easiest: create an empty repo.

## Deploy to GitHub Pages

1. Open `https://github.com/YOUR_ORG_NAME/AptiQuest-Frontend`.
2. Repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Verify organization allows Actions/Pages and the repo is eligible for GitHub Pages.
4. Click **Actions** and open the `Deploy AptiQuest Frontend to GitHub Pages` workflow. If Actions are blocked, an organization owner needs to enable the workflow.
5. On successful build, site will be at:

`https://YOUR_ORG_NAME.github.io/AptiQuest-Frontend/`

The `vite.config.js` detects the repository name from `GITHUB_REPOSITORY` during GitHub Actions and automatically adds `/AptiQuest-Frontend/` as the asset base path, so **you do not need to hardcode a personal GitHub username**. Routing uses URL hashes (`/#/learn`, `/#/arena`), which avoids refresh 404s on GitHub Pages.

If the repo name is something else, the deployment base updates automatically, too. If the repository is `YOUR_ORG_NAME.github.io`, Vite uses the root (`/`) base path.

After making changes:

```powershell
git add .
git commit -m "Update AptiQuest frontend"
git push origin main
```

GitHub Actions builds and republishes automatically.

## Common issues

- **Blank page after deployment:** Confirm Settings → Pages → GitHub Actions, Actions finished successfully, and repo name/URL is correct. Hard-refresh browser. If old PWA cache persists, unregister the service worker in developer tools and reload.
- **`npm` not recognized:** Install Node.js LTS, restart VS Code, check `node -v` and `npm -v`.
- **Dependency install error on Actions:** Confirm package registry is reachable; rerun `npm install` locally. A package lockfile is generated locally and may be committed. After committing the lockfile, optionally switch the workflow to `npm ci`.
- **Permission denied pushing to group repo:** Organization owner must grant repository write access, or you must authenticate as a user with access.
- **Pages says disabled:** Check organization plan/policies, repository visibility, and permission to use Actions.
- **`npm run build` succeeds but site not live:** Check Actions logs, Pages source and environment deployment approvals.

## Project files

```
AptiQuest-Frontend/
├── .github/workflows/deploy.yml     # Automated deployment
├── public/                         # App icon, manifest, service worker
├── src/
│   ├── components/                  # Layout and reusable UI
│   ├── context/                     # Local application state
│   ├── data/                        # Course/game/demo questions
│   ├── pages/                       # All screens and game logic
│   ├── utils/                       # Local storage helpers
│   ├── main.jsx                     # App routes
│   └── styles.css                   # Design system and responsive layouts
├── index.html
├── vite.config.js
└── package.json
```

## Future backend integration (not part of frontend demo)

FastAPI, PostgreSQL, Firebase Auth, Redis/WebSockets, storage for uploaded notes and video assets, secure score validation, moderation, admin roles, certificate verification, and AI content processing. **GitHub Pages cannot run the FastAPI backend**; deploy that separately (e.g. suitable Python backend host) and connect via environment-based API URL. Never store secrets in frontend `VITE_` environment variables.

## Update an existing version safely

If you have the previous ZIP open in VS Code: stop the server with **Ctrl+C**. Back up the old folder, extract this new ZIP, then **File → Open Folder → AptiQuest-Frontend** (the INNER project folder containing package.json). In its terminal run `npm install`, `npm run dev`. Do not run npm from the outer `AptiQuest-Frontend-Complete` directory. Existing localStorage demo progress should remain if you access the same browser origin; the updated service worker cache is versioned. If updating an already deployed group repo, replace its project source, then commit and push.

## Build verification status

Project source files and configuration are provided, but an automated `npm run build` could not be completed in the creation environment because the npm registry was not reachable. **Run `npm install` and `npm run build` in VS Code before deployment** and fix any issues reported by your installation.
