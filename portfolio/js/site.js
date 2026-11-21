// Renders the shared header/footer and the content for each page.
// Pages mark which renderer they want with <body data-page="...">.

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const tags = (items) => `<ul class="tags">${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;

function renderChrome(page) {
  const p = window.PROFILE;
  const link = (href, label, key) =>
    `<a href="${href}" class="${page === key ? "active" : ""}">${label}</a>`;

  document.body.insertAdjacentHTML(
    "afterbegin",
    `<header class="site-header"><div class="wrap">
      <a class="logo" href="index.html">${esc(p.name)}</a>
      <nav class="nav">
        ${link("index.html", "About", "home")}
        ${link("projects.html", "Projects", "projects")}
      </nav>
    </div></header>`
  );
  document.body.insertAdjacentHTML(
    "beforeend",
    `<footer class="site-footer"><div class="wrap">© ${new Date().getFullYear()} ${esc(p.name)}</div></footer>`
  );
}

function renderHome(root) {
  const p = window.PROFILE;
  const experience = p.experience
    .map(
      (e) => `<div class="card entry">
        <div class="entry-head"><h3>${esc(e.role)}</h3><span class="dates">${esc(e.dates)}</span></div>
        <div class="entry-org">${esc(e.org)}</div>
        <ul>${e.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");
  const education = p.education
    .map(
      (e) => `<div class="card entry">
        <div class="entry-head"><h3>${esc(e.degree)}</h3><span class="dates">${esc(e.dates)}</span></div>
        <div class="entry-org">${esc(e.org)}</div>
        ${e.notes ? `<div>${esc(e.notes)}</div>` : ""}
      </div>`
    )
    .join("");
  const skills = Object.entries(p.skills)
    .map(([group, list]) => `<div class="card"><h3>${esc(group)}</h3>${tags(list)}</div>`)
    .join("");

  root.innerHTML = `
    <div class="hero">
      <h1>${esc(p.name)}</h1>
      <p class="title">${esc(p.title)}</p>
      <div class="meta"><span>${esc(p.location)}</span><span><a href="mailto:${esc(p.email)}">${esc(p.email)}</a></span></div>
      <p class="summary">${esc(p.summary)}</p>
      <div class="btn-row">
        <a class="btn primary" href="projects.html">View projects →</a>
        <a class="btn" href="${esc(p.resumePdf)}" download>Download resume</a>
        <a class="btn" href="${esc(p.github)}" target="_blank" rel="noopener">GitHub</a>
        <a class="btn" href="${esc(p.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </div>
    <section><h2>Experience</h2><div class="stack">${experience}</div></section>
    <section><h2>Education</h2><div class="stack">${education}</div></section>
    <section><h2>Skills</h2><div class="skills">${skills}</div></section>`;
}

function renderProjects(root) {
  const cards = window.PROJECTS.map((pr) => {
    const cover = pr.image
      ? `style="background-image:url('${esc(pr.image)}')"`
      : `style="background:linear-gradient(135deg, ${esc(pr.accent)}, #0f172a)"`;
    return `<a class="project-card" href="project.html?id=${encodeURIComponent(pr.id)}">
      <div class="project-cover" ${cover}>${pr.image ? "" : esc(pr.name)}</div>
      <div class="project-body">
        <span class="status ${pr.demoUrl ? "live" : ""}">${pr.demoUrl ? "● Live demo" : "Demo coming soon"}</span>
        <h3>${esc(pr.name)}</h3>
        <p>${esc(pr.tagline)}</p>
        ${tags(pr.stack.slice(0, 4))}
      </div>
    </a>`;
  }).join("");

  root.innerHTML = `
    <div class="hero" style="padding-bottom:24px">
      <h1>Projects</h1>
      <p class="title">Pick a project to see what it does and try it out.</p>
    </div>
    <div class="projects-grid">${cards}</div>`;
}

function renderProject(root) {
  const id = new URLSearchParams(location.search).get("id");
  const pr = window.PROJECTS.find((x) => x.id === id);
  if (!pr) {
    root.innerHTML = `<a class="back" href="projects.html">← All projects</a>
      <div class="detail-hero"><h1>Project not found</h1></div>`;
    return;
  }
  document.title = `${pr.name} — ${window.PROFILE.name}`;
  document.documentElement.style.setProperty("--accent", pr.accent);

  const demoBtn = pr.demoUrl
    ? `<a class="btn primary" href="${esc(pr.demoUrl)}" target="_blank" rel="noopener">Open live demo ↗</a>`
    : `<a class="btn primary" aria-disabled="true">Live demo coming soon</a>`;
  const srcBtn = pr.sourceUrl
    ? `<a class="btn" href="${esc(pr.sourceUrl)}" target="_blank" rel="noopener">Source code</a>`
    : "";
  const demo = pr.demoUrl
    ? `<iframe class="demo-frame" src="${esc(pr.demoUrl)}" title="${esc(pr.name)} demo" loading="lazy"></iframe>`
    : `<div class="card demo-empty">The live demo for ${esc(pr.name)} isn't deployed yet. Check back soon${pr.sourceUrl ? ", or browse the source code" : ""}.</div>`;

  root.innerHTML = `
    <a class="back" href="projects.html">← All projects</a>
    <div class="detail-hero">
      <h1>${esc(pr.name)}</h1>
      <p class="tagline">${esc(pr.tagline)}</p>
      <div class="btn-row">${demoBtn}${srcBtn}</div>
    </div>
    <section>
      <div class="detail-grid">
        <div class="card">
          <h2>Overview</h2>
          <p style="margin-top:0">${esc(pr.summary)}</p>
          <h2>Features</h2>
          <ul>${pr.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
        </div>
        <div class="stack">
          <div class="card"><h2>Tech stack</h2>${tags(pr.stack)}</div>
          ${pr.role ? `<div class="card"><h2>My role</h2><p style="margin:0">${esc(pr.role)}</p></div>` : ""}
        </div>
      </div>
    </section>
    <section><h2>Try it</h2>${demo}</section>`;
}

const page = document.body.dataset.page;
renderChrome(page);
const root = document.getElementById("content");
({ home: renderHome, projects: renderProjects, project: renderProject })[page](root);
