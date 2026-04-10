// Navigation Injector - Dynamically injects nav and footer on all pages
document.addEventListener('DOMContentLoaded', function() {
  // Inject Navigation
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a class="nav-logo" href="/imalharr.github.io/">malhar<span>.</span></a>
    <ul class="nav-links">
      <li><a href="/imalharr.github.io/" id="nav-home">Home</a></li>
      <li><a href="/imalharr.github.io/projects.html" id="nav-projects">Projects</a></li>
      <li><a href="/imalharr.github.io/achievements.html" id="nav-achievements">Achievements</a></li>
      <li><a href="/imalharr.github.io/blog.html" id="nav-blog">Blog</a></li>
      <li><a href="/imalharr.github.io/#contact" id="nav-contact">Contact</a></li>
    </ul>
  `;
  document.body.insertBefore(nav, document.body.firstChild);

  // Inject Footer
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>Built with care by Meghmalhar Bhowmick. Connect on <a href="https://linkedin.com/in/malharm" target="_blank" style="color: var(--accent); text-decoration: none;">LinkedIn</a> or <a href="https://github.com/imalharr" target="_blank" style="color: var(--accent); text-decoration: none;">GitHub</a>.</p>
  `;
  document.body.appendChild(footer);

  // Set active nav link based on current page
  const currentPage = window.location.pathname;
  if (currentPage.includes('projects')) {
    document.getElementById('nav-projects').classList.add('active');
  } else if (currentPage.includes('achievements')) {
    document.getElementById('nav-achievements').classList.add('active');
  } else if (currentPage.includes('blog')) {
    document.getElementById('nav-blog').classList.add('active');
  } else if (currentPage.includes('index') || currentPage.endsWith('/')) {
    document.getElementById('nav-home').classList.add('active');
  }
});
