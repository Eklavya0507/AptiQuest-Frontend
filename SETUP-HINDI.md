# AptiQuest Mindverse V2 setup — Hinglish guide

## Update: Gaming-style V2

Old learning-dashboard style ko **Game Hub / Mindverse** mein redesign kiya hai. New hero, XP-level HUD, 2 adventure worlds, starter quests, arena game tiles, and battle UI. **Real player vs player abhi nahi hai**; game demo bot simulated hai.

Pichla version replace karna ho toh old `AptiQuest-Frontend` folder ka backup rakho, is V2 ZIP ko extract karo aur **andar wala AptiQuest-Frontend folder** open karo jahan `package.json` hai.

## 1) App ban raha hai ya website?

**Abhi mobile-friendly WEB APP (PWA)** ban raha hai. Phone mein browser se open hoga aur supported browser mein **Add to Home Screen / Install App** se app ki tarah launch ho sakta hai. Ye native Android APK nahi hai. Future mein isi design ko Flutter se native Android/iOS app mein convert/rebuild kar sakte hain.

## 2) Kahan deploy karna hai?

**Frontend: GitHub Pages (free public repository)**. Tumhara account group/organization ka hai, isliye repo OWNER group ka handle hoga. Personal account ka handle mat laga dena.

Example (sirf example, actual ID nahi):
- Group name: `my-college-team`
- Repo: `AptiQuest-Frontend`
- GitHub URL: `https://github.com/my-college-team/AptiQuest-Frontend`
- Live: `https://my-college-team.github.io/AptiQuest-Frontend/`

Ye link tab hi kaam karega jab repo banakar deploy karoge. Maine user ka actual group username guess nahi kiya.

## 3) VS Code mein setup

1. ZIP ko **Extract All** karo.
2. Extracted `AptiQuest-Frontend` folder ko VS Code se open karo (**File > Open Folder**).
3. Laptop mein Node.js LTS aur Git install honi chahiye.
4. VS Code **Terminal > New Terminal** open karo.
5. Run:

```powershell
node -v
npm -v
npm install
npm run dev
```

Terminal mein dikhne wala local URL browser mein kholo. Usually `http://localhost:5173/`.

Testing ke liye:

```powershell
npm run build
npm run preview
```

**Important:** Is archive ka npm build creation environment mein verify nahi ho saka (npm internet/DNS unavailable tha). Agar VS Code mein install/build error aaye toh terminal ka exact error share karna.

## 4) Group/organization GitHub repo banana

1. GitHub open karo. Top-right profile menu se apne **group organization** mein jao.
2. Organization ke under `AptiQuest-Frontend` naam ka **public empty repository** create karo.
3. `README`/`.gitignore`/license automatically initialize mat karna, kyunki files ZIP mein already hain.
4. Team members ko **collaborator** ya **organization team** permissions do; owner se `Write` access arrange karo.
5. VS Code terminal mein:

```powershell
git init
git branch -M main
git add .
git commit -m "AptiQuest frontend initial version"
git remote add origin https://github.com/YOUR_GROUP_ID/AptiQuest-Frontend.git
git push -u origin main
```

`YOUR_GROUP_ID` ko actual group GitHub username se replace karo. GitHub login maange toh browser/device credential flow complete karo. Password/token ko code ya chat mein paste mat karna.

Agar error `remote origin already exists` aaye:

```powershell
git remote -v
git remote set-url origin https://github.com/YOUR_GROUP_ID/AptiQuest-Frontend.git
```

Then push again.

## 5) GitHub Pages deployment

1. Repository > **Settings** > **Pages**.
2. **Build and deployment > Source > GitHub Actions** choose karo.
3. Repo > **Actions** > `Deploy AptiQuest Frontend to GitHub Pages` check karo.
4. Green check aane par live URL: `https://YOUR_GROUP_ID.github.io/AptiQuest-Frontend/`.
5. `vite.config.js` dynamically repo ka name detect karta hai. GitHub organization username hardcode karne ki zaroorat nahi.
6. Agar organization policy ke wajah se Actions/Pages disable ho, org owner ko enable karna padega.

## 6) Updates deploy karna

```powershell
git add .
git commit -m "Improve frontend UI"
git push origin main
```

Har push par Actions frontend build karke Pages update karega.

## 7) Kya-kya working hai? (and what is demo only)

Working frontend:
- Demo sign-in, dashboard, profile edits
- Courses and local lesson completion
- Quizzes, score/result, print/save demo certificates
- Math Sprint / Tables / Logic and Sudoku local games
- XP, badges, rank preview, admin upload screen preview
- Mobile responsive and PWA

**Abhi working nahi:** real email/password authentication, video AI teacher API, persistent multi-user database, real-time two-phone matches, true institute/state rankings, server certificate verification, actual PDF upload. GitHub Pages sirf static frontend serve karega.

## 8) Important folders

`src/pages` = app screens, `src/components` = layout/reusable parts, `src/data/content.js` = demo subjects + questions, `src/context` = demo state, `src/styles.css` = design, `.github/workflows/deploy.yml` = deployment.

## 9) Future backend

Next phase: FastAPI + PostgreSQL backend ko alag host karo, real login, verified exams aur WebSocket multiplayer implement karo. Frontend API calls backend se connect honge. GitHub Pages par Python backend **run nahi hota**.
