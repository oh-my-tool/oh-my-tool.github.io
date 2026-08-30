# Oh My Tool Website

The official bilingual website and documentation for [Oh My Tool](https://github.com/oh-my-tool/oh-my-tool).

## Local development

```powershell
npm install
npm run dev
```

The local site is available at `http://localhost:4321/`.

## Checks and production preview

```powershell
npm run test:structure
npm run check
npm run build
npm run preview
```

The public site is intended to be served at [oh-my-tool.github.io](https://oh-my-tool.github.io/).

## Product protocol

The website presents OMT's canonical agent flow:

```text
search → describe → run
```

## Routes

- `/` — English landing page
- `/zh/` — Chinese landing page
- `/docs/` — English documentation
- `/zh/docs/` — Chinese documentation
- `/roadmap/` — English roadmap
- `/zh/roadmap/` — Chinese roadmap

## GitHub Pages

The repository includes a workflow in `.github/workflows/deploy.yml`. In the
repository settings, set Pages → Build and deployment → Source to **GitHub
Actions**. Pushes to `main` then build and publish the static `dist/` output.
