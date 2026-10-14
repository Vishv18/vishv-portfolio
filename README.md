# Vishv Undavia — Portfolio Website

A responsive, dark editorial-style portfolio for Data Analytics, Business Intelligence, and AI-assisted analytics.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. In the terminal, run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite.

## Before publishing

Edit `src/main.jsx` and update the `PROFILE` values:

- `email`: your preferred public contact email
- `linkedin`: your actual LinkedIn profile URL
- `github`: verify your GitHub username

Also review the HR Analytics project link. It currently points to your GitHub profile because the exact repository URL has not been confirmed. Confirm that each project is public and the repository names are correct.

## Build for deployment

```bash
npm run build
```

The production site is generated in `dist/`. This project can be deployed to Vercel by importing the repository; Vercel detects Vite automatically.

## Notes

- The portfolio uses React + Vite and Lucide icons.
- Google Fonts are loaded from the web; a system sans-serif fallback is available.
- GitHub project links are editable in the `projects` array in `src/main.jsx`.
