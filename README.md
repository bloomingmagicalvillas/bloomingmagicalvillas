# Blooming Magical Villas

Static Astro site for Blooming Magical Villas, migrated from the original PHP website. The pages and media are built into `dist/` and hosted on GitHub Pages.

## Local development

```sh
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys on pushes to `main`. It derives the Astro base path from the GitHub repository name, so project-page asset and route URLs work without a hard-coded owner. The Pages source must be set to **GitHub Actions** in repository settings.

## Forms

The contact and quote forms use FormSubmit because GitHub Pages does not run PHP. On the first real submission, FormSubmit sends an activation email to `info@bloomingvillas.com`; activate the address to enable delivery. Form submissions are handled by FormSubmit, and successful submissions redirect to the site's static confirmation pages.
