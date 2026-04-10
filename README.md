# Meghmalhar Bhowmick - Personal Portfolio

A multi-page, responsive portfolio website showcasing projects, achievements, and insights. Built with vanilla HTML, CSS, and JavaScript. Deployed on GitHub Pages.

## Project Structure

```
imalharr.github.io/
├── index.html              # Home page
├── projects.html           # Projects hub
├── achievements.html       # Achievements & awards
├── blog.html              # Blog (placeholder for future posts)
├── css/
│   └── style.css          # Shared stylesheet for all pages
├── js/
│   └── nav.js             # Navigation injector (shared nav & footer)
├── projects/
│   ├── esp32-obstacle-detection.html
│   ├── archipelago-roblox.html
│   ├── soil-moisture-sensor.html
│   ├── vfx-video-production.html
│   └── mun-governance.html
├── assets/
│   ├── images/
│   └── videos/
└── README.md
```

## Pages Overview

### Home Page (`index.html`)
- Hero section with tagline and call-to-action
- "What I Do" section with 4 key skills
- About section with personal narrative and key stats
- Featured projects and achievements
- Beyond section highlighting unique experiences
- Contact section

### Projects Page (`projects.html`)
- Grid of all projects with descriptions
- Tags for technologies used
- Links to detailed project pages
- Skills section organized by category

### Achievements Page (`achievements.html`)
- SOF Olympiads section
- WIZ National Spell Bee table with detailed results
- Leadership & MUN section
- Writing competitions
- Technical programs & bootcamps
- Conservation & adventure experiences
- Media & publications
- Stats summary

### Blog Page (`blog.html`)
- Placeholder for future blog posts
- List of planned topics
- Newsletter signup (optional)

### Project Detail Pages (`projects/*.html`)
- Comprehensive project overview
- Technical specifications
- Development process
- Challenges & solutions
- Impact & future enhancements
- Skills used
- Links to GitHub and resources

## How to Customize

### 1. Update Personal Information
- Edit `index.html` to update school, location, or personal details
- Update email address in contact links
- Change social media handles if needed

### 2. Add New Projects
- Create a new HTML file in the `projects/` folder (e.g., `projects/my-new-project.html`)
- Use the `esp32-obstacle-detection.html` template as a reference
- Add the project card to `projects.html` with a link to the new detail page

### 3. Add Blog Posts
- Create a new HTML file in the `blog/` folder (e.g., `blog/my-first-post.html`)
- Add a link to the blog post in `blog.html`
- Update the "Planned Topics" section as you write posts

### 4. Update Achievements
- Edit `achievements.html` to add new achievements
- Update the Spell Bee table if new results come in
- Add new sections as needed

### 5. Modify Styling
- All styling is in `css/style.css`
- CSS variables are defined at the top for easy customization
- Dark theme colors: `--bg`, `--bg2`, `--bg3`
- Accent colors: `--accent` (teal), `--accent2` (purple)

### 6. Add Images & Videos
- Place images in `assets/images/`
- Place videos in `assets/videos/`
- Reference them in HTML files with relative paths (e.g., `../assets/images/my-image.jpg`)

## Navigation System

The `js/nav.js` file automatically injects a consistent navigation bar and footer on every page. This means:
- You don't need to copy-paste the nav on every page
- If you add a new page, just update the links in `nav.js`
- The active nav link is automatically highlighted based on the current page

To add a new page to the navigation:
1. Create your HTML file
2. Add a new `<li><a href="...">Page Name</a></li>` to the nav in `js/nav.js`
3. Add a corresponding `id="nav-page-name"` element
4. Update the active nav logic if needed

## Deployment

This portfolio is deployed on GitHub Pages. To deploy your changes:

```bash
git add .
git commit -m "Update portfolio with new projects/achievements"
git push origin main
```

Your site will be live at `https://imalharr.github.io/`

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Fully responsive

## Performance Tips

1. **Images:** Optimize images before adding them (use tools like TinyPNG or ImageOptim)
2. **Videos:** Use compressed video formats (MP4, WebM) and consider lazy loading
3. **CSS:** The stylesheet is minified and optimized for fast loading
4. **JavaScript:** The nav.js file is lightweight and loads asynchronously

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Color contrast meets WCAG AA standards
- Keyboard navigation support
- Alt text for images (add as needed)

## Future Enhancements

- [ ] Add individual blog post pages
- [ ] Implement contact form with backend
- [ ] Add dark/light mode toggle
- [ ] Add project filtering by technology
- [ ] Implement search functionality
- [ ] Add testimonials/recommendations section
- [ ] Create a resume/CV download link
- [ ] Add analytics tracking

## License

This portfolio is personal and for demonstration purposes. Feel free to use it as a template for your own portfolio, but please customize it with your own content.

## Contact

- Email: meghmalharbhowmick@gmail.com
- LinkedIn: https://linkedin.com/in/malharm
- GitHub: https://github.com/imalharr
- Instagram: https://instagram.com/imalharr

---

Built with care.