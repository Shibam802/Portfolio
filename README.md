# Shibam Banik — React Developer Portfolio

A responsive dark-modern React portfolio built with Vite and Lucide icons.

## Run locally

1. Install Node.js (LTS).
2. Extract this folder and open it in a terminal.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite.

## Personalize before publishing

### 1. Add your photo
Your supplied portrait is already included as `public/profile.jpg`.

### 2. Add your links
Your email, GitHub and LinkedIn links have been added in the `PROFILE` object in `src/App.jsx`. Review them before publishing.

Replace the empty GitHub/live project links in the `projects` array as you confirm them.

### 3. Add your resume
Your supplied resume is already included as `public/resume.pdf`.

### 4. Complete education details
In `src/App.jsx`, replace the education placeholder with your branch, college/university and expected graduation year.

### 5. Review project claims
Descriptions are intentionally cautious. Update them to match the features, experiments and results you have personally completed. Add measured accuracy only if you have evaluation results.

## Build for production

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy
Push the project to GitHub and import the repository into Vercel. Vercel should detect Vite automatically; use `npm run build` as the build command and `dist` as the output directory.
