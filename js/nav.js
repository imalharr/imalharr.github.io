document.addEventListener('DOMContentLoaded', function () {

  // ── NAV ──
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a class="nav-logo" href="/"><span class="prompt">~/</span>malhar</a>
    <ul class="nav-links">
      <li><a href="/" id="nav-home">home</a></li>
      <li><a href="/projects.html" id="nav-projects">projects</a></li>
      <li><a href="/achievements.html" id="nav-achievements">achievements</a></li>
      <li><a href="/blog.html" id="nav-blog">blog</a></li>
      <li><a href="/#contact" id="nav-contact">contact</a></li>
    </ul>
  `;
  document.body.insertBefore(nav, document.body.firstChild);

  // ── FOOTER ──
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <span style="color: var(--accent);">malhar@howrah:~$</span> built by hand · 2026 ·
    <a href="https://github.com/imalharr/imalharr.github.io" target="_blank" style="color: var(--muted); text-decoration: none;">source</a>
  `;
  document.body.appendChild(footer);

  // ── ACTIVE LINK ──
  const path = window.location.pathname;
  if (path.includes('projects')) {
    document.getElementById('nav-projects').classList.add('active');
  } else if (path.includes('achievements')) {
    document.getElementById('nav-achievements').classList.add('active');
  } else if (path.includes('blog')) {
    document.getElementById('nav-blog').classList.add('active');
  } else {
    document.getElementById('nav-home').classList.add('active');
  }

});
