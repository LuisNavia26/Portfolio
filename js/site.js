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
        ${link("hobbies.html", "Hobbies", "hobbies")}
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
      <div class="hero-top">
        ${p.photo ? `<img class="avatar" src="${esc(p.photo)}" alt="${esc(p.name)}" width="132" height="132" />` : ""}
        <div>
          <h1>${esc(p.name)}</h1>
          <p class="title">${esc(p.title)}</p>
        </div>
      </div>
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
        <div class="card-labels">
          ${pr.category ? `<span class="category">${esc(pr.category)}</span>` : ""}
          ${pr.hasDemo === false ? "" : `<span class="status ${pr.demoUrl ? "live" : ""}">${pr.demoUrl ? "● Live demo" : "Demo coming soon"}</span>`}
        </div>
        <h3>${esc(pr.name)}</h3>
        <p>${esc(pr.tagline)}</p>
        ${tags(pr.stack.slice(0, 4))}
      </div>
    </a>`;
  }).join("");

  root.innerHTML = `
    <div class="hero" style="padding-bottom:24px">
      <h1>Projects</h1>
      <p class="title">Software I've built and hardware I've engineered. Pick one to see the details.</p>
    </div>
    <div class="projects-grid">${cards}</div>`;
}

// Photo/video gallery. Photos open full size in the lightbox; videos play inline.
function mediaGrid(items) {
  return `<div class="media-grid">${items
    .map((m) =>
      m.type === "video"
        ? `<figure class="media-item"><video controls playsinline preload="none" poster="${esc(m.poster)}" src="${esc(m.src)}" aria-label="${esc(m.alt)}"></video></figure>`
        : `<figure class="media-item"><button type="button" class="media-open" data-src="${esc(m.src)}" data-alt="${esc(m.alt)}" aria-label="View photo: ${esc(m.alt)}"><img src="${esc(m.thumb || m.src)}" alt="${esc(m.alt)}" loading="lazy" /></button></figure>`
    )
    .join("")}</div>`;
}

function mediaCount(items = []) {
  const n = (t) => items.filter((m) => m.type === t).length;
  const part = (k, word) => (k ? `${k} ${word}${k > 1 ? "s" : ""}` : "");
  return [part(n("image"), "photo"), part(n("video"), "video")].filter(Boolean).join(" · ");
}

function renderHobbies(root) {
  const hobbies = window.HOBBIES || [];
  const overview = hobbies
    .map(
      (h) => `<a class="hobby-tile" href="#${esc(h.id)}" style="--tile-accent:${esc(h.accent)}">
        <div class="hobby-tile-img" style="background-image:url('${esc(h.image)}')"></div>
        <div class="hobby-tile-body"><h3>${esc(h.name)}</h3><span>${esc(mediaCount(h.media))}</span></div>
      </a>`
    )
    .join("");
  const sections = hobbies
    .map(
      (h) => `<section class="hobby" id="${esc(h.id)}" style="--accent:${esc(h.accent)}">
        <div class="hobby-head">
          <h2>${esc(h.name)}</h2>
          <p>${esc(h.blurb)}</p>
          ${h.details && h.details.length ? tags(h.details) : ""}
        </div>
        ${h.media && h.media.length ? mediaGrid(h.media) : ""}
      </section>`
    )
    .join("");

  root.innerHTML = `
    <div class="hero" style="padding-bottom:24px">
      <h1>Hobbies</h1>
      <p class="title">What I'm up to when I'm not writing code.</p>
    </div>
    <div class="hobby-overview">${overview}</div>
    ${sections}`;
}

// Lightbox for gallery photos: click to open, arrows or the arrow keys to browse,
// Esc or a click outside the photo to close.
function setupLightbox() {
  let group = [], index = 0;
  const box = document.createElement("div");
  box.className = "lightbox";
  box.hidden = true;
  box.innerHTML = `<button type="button" class="lb-close" aria-label="Close">×</button>
    <button type="button" class="lb-prev" aria-label="Previous photo">‹</button>
    <figure><img alt="" /><figcaption></figcaption></figure>
    <button type="button" class="lb-next" aria-label="Next photo">›</button>`;
  document.body.appendChild(box);
  const img = box.querySelector("img"), cap = box.querySelector("figcaption");

  const show = (i) => {
    index = (i + group.length) % group.length;
    const b = group[index];
    img.src = b.dataset.src;
    img.alt = b.dataset.alt;
    cap.textContent = b.dataset.alt;
    box.querySelector(".lb-prev").hidden = box.querySelector(".lb-next").hidden = group.length < 2;
  };
  const close = () => { box.hidden = true; img.removeAttribute("src"); document.body.style.overflow = ""; };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".media-open");
    if (btn) {
      group = [...btn.closest(".media-grid").querySelectorAll(".media-open")];
      show(group.indexOf(btn));
      box.hidden = false;
      document.body.style.overflow = "hidden";
      return;
    }
    if (box.hidden) return;
    if (e.target.closest(".lb-prev")) show(index - 1);
    else if (e.target.closest(".lb-next")) show(index + 1);
    else if (e.target.closest(".lb-close") || e.target === box) close();
  });
  document.addEventListener("keydown", (e) => {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
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

  const hasDemo = pr.hasDemo !== false;
  const demoBtn = !hasDemo
    ? ""
    : pr.demoUrl
    ? `<a class="btn primary" href="${esc(pr.demoUrl)}" target="_blank" rel="noopener">Open live demo ↗</a>`
    : `<a class="btn primary" aria-disabled="true">Live demo coming soon</a>`;
  const srcBtn = pr.sourceUrl
    ? `<a class="btn" href="${esc(pr.sourceUrl)}" target="_blank" rel="noopener">Source code</a>`
    : "";
  const ft = pr.fieldTest;
  const streamBtn = ft
    ? `<a class="btn" href="${esc(ft.url)}" target="_blank" rel="noopener">▶ Watch the stream ↗</a>`
    : "";
  const fieldTest = ft
    ? `<section><h2>${esc(ft.title)}</h2>
        <div class="card field-test">
          <p>${esc(ft.text)}</p>
          <div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(ft.youtubeId)}" title="${esc(pr.name)}: ${esc(ft.title)}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
          <a class="btn" href="${esc(ft.url)}" target="_blank" rel="noopener">Watch on YouTube ↗</a>
        </div>
      </section>`
    : "";
  const demo = pr.demoUrl
    ? `<iframe class="demo-frame" src="${esc(pr.demoUrl)}" title="${esc(pr.name)} demo" loading="lazy"></iframe>`
    : `<div class="card demo-empty">The live demo for ${esc(pr.name)} isn't deployed yet. Check back soon${pr.sourceUrl ? ", or browse the source code" : ""}.</div>`;

  root.innerHTML = `
    <a class="back" href="projects.html">← All projects</a>
    <div class="detail-hero">
      ${pr.category ? `<span class="category">${esc(pr.category)}</span>` : ""}
      <h1>${esc(pr.name)}</h1>
      <p class="tagline">${esc(pr.tagline)}</p>
      ${demoBtn || streamBtn || srcBtn ? `<div class="btn-row">${demoBtn}${streamBtn}${srcBtn}</div>` : ""}
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
          <div class="card"><h2>${hasDemo ? "Tech stack" : "Skills"}</h2>${tags(pr.stack)}</div>
          ${pr.role ? `<div class="card"><h2>My role</h2><p style="margin:0">${esc(pr.role)}</p></div>` : ""}
        </div>
      </div>
    </section>
    ${fieldTest}
    ${pr.media && pr.media.length ? `<section><h2>Gallery</h2>${mediaGrid(pr.media)}</section>` : ""}
    ${hasDemo ? `<section><h2>Try it</h2>${demo}</section>` : ""}`;
}

const page = document.body.dataset.page;
renderChrome(page);
const root = document.getElementById("content");
({ home: renderHome, projects: renderProjects, hobbies: renderHobbies, project: renderProject })[page](root);
setupLightbox();
