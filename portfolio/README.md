# Portfolio

Static site — no build step. Open `index.html` or deploy the folder to GitHub Pages / Netlify / Vercel.

- **Edit content:** everything (resume, links, projects) is in `js/data.js`.
- **Resume PDF:** put it at `assets/resume.pdf`.
- **Add a live demo:** deploy the project, then set its `demoUrl` in `js/data.js`. The project page embeds it and shows an "Open live demo" button.
- **Add a project:** add an object to `PROJECTS` in `js/data.js`.

Preview locally: `npx serve .` (or `python -m http.server`).
