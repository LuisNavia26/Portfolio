# Portfolio

This is my personal page where I keep my portfolio of projects and activities. Live at **https://alfredonavia.com**.

Static site with no build step, deployed on Netlify (config in `netlify.toml`). Every push to `main` redeploys it.

- **Edit content:** everything (resume, links, projects) is in `js/data.js`.
- **Resume PDF:** lives in `assets/`.
- **Add a live demo:** deploy the project, then set its `demoUrl` in `js/data.js`. The project page embeds it and shows an "Open live demo" button.
- **Add a project:** add an object to `PROJECTS` in `js/data.js`.

Preview locally: `python -m http.server 5500`, then open http://localhost:5500.
