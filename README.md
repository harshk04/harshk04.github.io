# Harsh Kumawat — Portfolio

A modern, multi-page portfolio for Harsh Kumawat rebuilt with React, Vite, and Tailwind CSS. The site highlights AI/ML projects, leadership experiences, and services while keeping all original content intact in a cleaner, more navigable experience.

<a href="https://harshk.is-a.dev" target="_blank" rel="noreferrer">**Visit the live site →**</a>

## ✨ Highlights
- Dedicated pages for Home, About, Projects, Services, Resume, Contact, and Blog
- Dark/light theme toggle with persistent preference
- Framer Motion page transitions and scroll-based reveals
- Project filtering, featured work showcase, and rich detail cards
- SEO-ready with per-page meta tags and Open Graph data
- Responsive layouts powered by Tailwind utility classes
- Contact form wired for Formspree with graceful fallback messaging

## 🛠️ Tech Stack
- [React 18](https://react.dev/) + [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/) for fast dev/build tooling
- [Tailwind CSS](https://tailwindcss.com/) with custom theme tokens
- [Framer Motion](https://www.framer.com/motion/) for animations
- [lucide-react](https://lucide.dev/) icon set
- [react-helmet-async](https://github.com/staylor/react-helmet-async) for structured metadata

## 📂 Project Structure
```
├── public/            # Static assets (images, favicon, CNAME)
├── src/
│   ├── components/    # Reusable UI building blocks
│   ├── context/       # Theme provider and hooks
│   ├── data/          # Portfolio copy, projects, skills, experiences
│   ├── pages/         # Route-level screen components
│   ├── styles/        # Global Tailwind entrypoint
│   └── main.jsx       # App bootstrap
└── vite.config.js     # Vite configuration
```

## 🚀 Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the dev server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.
3. **Lint the codebase**
   ```bash
   npm run lint
   ```
4. **Create a production build**
   ```bash
   npm run build
   ```
   Preview the build with `npm run preview`.

### Environment Variables
Optional: configure Formspree handling for the contact form.
```
VITE_FORMSPREE_ID=<your_form_id>
```
If this value is absent, the form will display a helpful message and encourage direct email contact instead of failing silently.

## 🧩 Customisation Guide
- **Personal info, hero, services, certifications:** update `src/data/profile.js`
- **Projects & filters:** edit `src/data/projects.js`
- **Skills matrix:** edit `src/data/skills.js`
- **Styling tokens:** adjust colours, fonts, and spacing in `tailwind.config.js`
- **Global styles:** tweak utility layers in `src/styles/global.css`

All images live under `public/images`. Replace or add assets there and update the relevant data entry.

## 📦 Deployment
Run `npm run build` and deploy the `dist/` directory to your hosting provider of choice (GitHub Pages, Vercel, Netlify, etc.). The included `CNAME` file ensures custom-domain support on GitHub Pages when copied to the deployed output.

## 🤝 Contact
Have feature ideas or feedback? Reach out at [kumawatharsh2004@gmail.com](mailto:kumawatharsh2004@gmail.com) or connect on [LinkedIn](https://www.linkedin.com/in/harsh-kumawat-069bb324b/).

---
Crafted with curiosity and consistency ✨
