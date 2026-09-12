# Career Pilot

Career Pilot is a fully static, responsive frontend project for a diploma-level major project. It is built using HTML5, CSS3, Bootstrap 5, Font Awesome, Google Fonts, and Vanilla JavaScript only.

## Features

- Modern landing page with hero section, pricing, testimonials, company highlights, and CTA
- Student dashboard and preparation workflow
- Company directory and company detail pages
- Question bank, aptitude quiz, DSA section, projects, and HR preparation
- AI interview simulator mock interface and interview reports
- Saved questions and progress tracking
- Admin dashboard with company, question, interviews, users, plans, and settings pages
- LocalStorage-based mock interactions for demo persistence

## Project Structure

- `index.html` — landing page
- `login.html` — login page
- `register.html` — registration page
- `forgot-password.html` — forgot password page
- `student/` — student-side pages
- `admin/` — admin-side pages
- `assets/css/` — shared stylesheet files
- `assets/js/` — shared frontend scripts
- `admin/assets/css/` — admin-specific styling
- `admin/assets/js/` — admin script logic

## How to Run

Because this is a frontend-only static website, you can run it by simply opening the HTML files in a browser.

Recommended approach:

1. Open `index.html` in a browser.
2. Navigate through the website using the built-in links.
3. For the student and admin flows, browse the corresponding pages directly from the workspace.

## Notes

- No framework like React, Next.js, Vue, Angular, or Tailwind was used for the main interface.
- This is a frontend demo project and does not include a real backend or database.
- Mock actions like login, saving questions, and interview simulation use `localStorage`.
- The project is intentionally self-contained so it can run without any installation steps.

## Files Included

- `assets/css/style.css`
- `assets/css/responsive.css`
- `assets/css/components.css`
- `assets/js/main.js`
- `assets/js/auth.js`
- `assets/js/student.js`
- `admin/assets/css/admin.css`
- `admin/assets/js/admin.js`

## Future Expansion

The project can later be extended with:

- a real authentication backend
- database-backed student and admin data
- AI interview API integration
- resume upload and analysis
- real analytics and charts
- deployment to Netlify, GitHub Pages, or Vercel
