# Nothatcher Project Workshop

A polished, **offline-first creative planning workspace** for games, apps, mods, design projects and Project0 experiences.

## What it does

- A sidebar with multiple projects and nested folders.
- Project starter templates: **Game / Project0**, **App**, **Game Mod**, **Creative**, and **Blank**.
- Rich project briefs, gameplay mechanics, progression, technical planning, UI, asset register, roadmaps, bugs and launch checklists.
- Markdown notes with live autosave, write/preview modes, tags, stages, priorities and folder moves.
- Planning board with Idea, Planned, In Progress, Review, Done and On Hold stages.
- Local asset library accepting images, 3D model files, audio, video, PDFs and arbitrary files. Images, audio and video can preview in browser.
- Drag files into the asset library, and drag sidebar items onto other folders on desktop.
- Quick idea capture, search, note duplication, and project settings.
- Export a project as a ZIP containing **editable Markdown files and original assets**.
- Export/import a **full-workspace JSON backup**, including assets.
- No login, no external dependencies, no analytics or advertising.
- Responsive desktop/mobile interface (including Android Chrome).
- Installable progressive web app with cached application shell after first visit.

## Important: where does the data live?

**The website is hosted on GitHub Pages; personal projects and uploaded assets are NOT uploaded to GitHub automatically.** They are saved in the browser's IndexedDB, on the device and browser profile currently used. Clearing site data or switching devices without exporting a backup can lose your work. Export JSON backups regularly and import them on other devices. Private work remains local to your browser unless you intentionally publish or share it.

Large asset collections may exceed browser storage limits. Back up frequently. Exported ZIP files contain uncompressed entries for portability.

## Local use

Open `index.html` in a browser, or serve it via `python3 -m http.server 8080` and visit `http://localhost:8080`.

## Host on GitHub Pages

1. Create a new repository (suggested name: `project-workshop`).
2. Upload **all repository contents**, including `.github/workflows/deploy.yml`.
3. In GitHub, open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. Open **Actions → Deploy Project Workshop to GitHub Pages** and click **Run workflow** (or push a commit to main).
5. After success, find the live website at `https://YOUR-USERNAME.github.io/project-workshop/`.

The included workflow automatically deploys the static site whenever you push to `main`.

## Usage

1. Use **New project** to choose a template.
2. Use the left sidebar to open your project, create nested folders, and add notes.
3. Add design references, 3D models or screenshots in **Asset library**.
4. Add stages and tags to notes. Monitor progress in **Planning board**.
5. Export a backup every time you finish a significant planning session.

## Security, limitations and privacy

- GitHub Pages serves the app; it is **not** an online notes database, team collaboration server or cross-device sync service.
- This browser app does **not** read GitHub API keys, request OAuth scopes or auto-publish your designs.
- Project backups are plain JSON and can include private writing and embedded assets. Store them somewhere trusted.
- No live multiplayer, API synchronization, CRDT collaboration or remote file versioning is included.
- File previews depend on browser support for the file type. GLB, for example, is stored but downloaded rather than rendered.
- Local browser storage can fail when quota is exceeded or in private mode.

MIT licensed. You may adapt and host the app anywhere.
