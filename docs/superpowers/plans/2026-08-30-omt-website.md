# Oh My Tool Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and locally preview a bilingual Astro + Starlight website for Oh My Tool, with a custom dark developer-infrastructure landing page and user-facing documentation.

**Architecture:** Astro owns the static site shell and custom landing pages. Starlight owns the localized documentation tree, navigation, search, code highlighting, and accessible docs layout. English is the default locale; Chinese pages use the `/zh/` prefix. Shared landing components consume locale-specific content objects so the two home pages keep the same information architecture without coupling translations to markup.

**Tech Stack:** Astro, `@astrojs/starlight`, TypeScript, CSS custom properties, Markdown/MDX, GitHub Actions, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-08-30-omt-website-design.md`

## Global Constraints

- English is the default locale and does not receive a locale prefix; Chinese uses `/zh/`.
- The site combines a custom landing page with Starlight-powered documentation.
- Use deep navy/black surfaces, restrained purple-to-cyan accents, subtle grid texture, editorial headings, and terminal/code panels.
- The site must not modify the Core, MySQL, Redis, or Kafka repositories.
- Do not present deferred roadmap features as shipped functionality.
- Respect `prefers-reduced-motion` and preserve visible keyboard focus states.
- Build and deploy the generated `dist/` output through GitHub Actions to GitHub Pages.
- No backend, account system, CMS, runtime content fetching, stock photography, or third-party image hosting.

## File Map

- Create `package.json`: project scripts and Astro/Starlight dependencies.
- Create `astro.config.mjs`: site URL, Starlight integration, locales, and GitHub Pages settings.
- Create `tsconfig.json`: Astro's strict TypeScript configuration.
- Create `src/content.config.ts`: Starlight content collection configuration.
- Create `src/styles/global.css`: shared colors, typography, grid texture, motion, focus, and responsive primitives.
- Create `src/data/site-content.ts`: typed English and Chinese landing-page copy, commands, principles, capabilities, and extension links.
- Create `src/components/site/SiteHeader.astro`: logo, nav, GitHub CTA, locale switcher.
- Create `src/components/site/ArchitectureFlow.astro`: responsive runtime architecture diagram.
- Create `src/components/site/ProtocolStrip.astro`: `search → describe → run` protocol presentation.
- Create `src/components/site/CapabilityGrid.astro`: capability cards.
- Create `src/components/site/TerminalDemo.astro`: static command/output terminal panel.
- Create `src/components/site/ExtensionGrid.astro`: official extension cards.
- Create `src/components/site/PrinciplesSection.astro`: product principle cards.
- Create `src/components/site/RoadmapPreview.astro`: roadmap milestone summary.
- Create `src/components/site/SiteFooter.astro`: footer navigation and repository links.
- Create `src/layouts/LandingLayout.astro`: shared HTML shell and landing-page layout.
- Create `src/pages/index.astro`: English landing page.
- Create `src/pages/zh/index.astro`: Chinese landing page.
- Create `src/pages/roadmap.astro`: English roadmap page.
- Create `src/pages/zh/roadmap.astro`: Chinese roadmap page.
- Create `src/content/docs/en/index.md`: English docs landing.
- Create `src/content/docs/en/getting-started/installation.md`: installation guide.
- Create `src/content/docs/en/getting-started/first-run.md`: first `search → describe → run` flow.
- Create `src/content/docs/en/concepts/runtime.md`: runtime concepts.
- Create `src/content/docs/en/concepts/providers-and-extensions.md`: providers and extensions.
- Create `src/content/docs/en/cli/reference.md`: command reference.
- Create `src/content/docs/en/extensions/official.md`: official extension links.
- Create `src/content/docs/zh/index.md`: Chinese docs landing.
- Create `src/content/docs/zh/getting-started/installation.md`: Chinese installation guide.
- Create `src/content/docs/zh/getting-started/first-run.md`: Chinese first-run guide.
- Create `src/content/docs/zh/concepts/runtime.md`: Chinese runtime concepts.
- Create `src/content/docs/zh/concepts/providers-and-extensions.md`: Chinese provider/extension guide.
- Create `src/content/docs/zh/cli/reference.md`: Chinese command reference.
- Create `src/content/docs/zh/extensions/official.md`: Chinese official extension links.
- Create `public/favicon.svg`: simple OMT mark without external assets.
- Create `.github/workflows/deploy.yml`: GitHub Pages build and deployment workflow.
- Create `.gitignore`: dependency, build, editor, and OS ignores.
- Modify `README.md`: local development, build, preview, and deployment notes.

### Task 1: Scaffold the Astro + Starlight site

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/content.config.ts`
- Create: `.gitignore`
- Create: `README.md`

**Interfaces:**
- Produces the Astro project root, the `astro dev`, `astro check`, and `astro build` scripts, the `en`/`zh` locale configuration, and the Starlight content collection used by all later tasks.

- [ ] **Step 1: Create project metadata and scripts**

  Define `package.json` with `type: "module"`, scripts `dev`, `check`, `build`, and `preview`, and dependencies for Astro and Starlight. Keep the project static and do not add a server adapter.

- [ ] **Step 2: Configure site and locales**

  Configure `site: "https://oh-my-tool.github.io"`, Starlight with `defaultLocale: "en"`, `prefixDefaultLocale: false`, and a `zh` locale. Set the Starlight title, description, social links, and sidebar groups for Getting Started, Concepts, CLI Reference, Providers/Extensions, and Roadmap.

- [ ] **Step 3: Add strict TypeScript and ignore rules**

  Extend Astro's strict TypeScript preset. Ignore `node_modules/`, `dist/`, `.astro/`, local environment files, editor settings, and OS metadata.

- [ ] **Step 4: Run the empty project checks**

  Run `npm install`, then `npm run check` and `npm run build` from the website repository. Expected: both commands complete successfully before custom pages are added.

- [ ] **Step 5: Commit the scaffold**

  Run `git add package.json package-lock.json astro.config.mjs tsconfig.json src/content.config.ts .gitignore README.md` and commit with `feat: scaffold bilingual astro site`.

### Task 2: Establish shared visual primitives and data

**Files:**
- Create: `src/styles/global.css`
- Create: `src/data/site-content.ts`
- Create: `src/components/site/SiteHeader.astro`
- Create: `src/components/site/SiteFooter.astro`
- Create: `src/layouts/LandingLayout.astro`
- Create: `public/favicon.svg`

**Interfaces:**
- Consumes: Astro project configuration from Task 1.
- Produces: typed `LandingContent` data, shared CSS variables, the header/footer components, and `LandingLayout.astro` consumed by both locale home pages.

- [ ] **Step 1: Define typed bilingual content data**

  Export a `LocaleKey = "en" | "zh"`, a `LandingContent` interface, and `landingContent: Record<LocaleKey, LandingContent>`. Include hero copy, CTA labels, navigation labels, four capabilities, four principles, three extension cards, terminal commands, roadmap milestones, and language-switch URLs. Use the Core README facts: provider-independent runtime, native/local/CLI-first, `search → describe → run`, MCP, policy preflight, and official extensions.

- [ ] **Step 2: Add the visual token layer**

  Define CSS variables for `--bg`, `--surface`, `--surface-raised`, `--text`, `--muted`, `--line`, `--accent-violet`, `--accent-cyan`, spacing, radii, and content widths. Add the grid texture using CSS gradients, readable selection color, visible `:focus-visible` outlines, and a reduced-motion media query.

- [ ] **Step 3: Implement the shared shell**

  `LandingLayout.astro` must set the locale-aware `<html lang>`, metadata, global CSS, header, slot, and footer. `SiteHeader.astro` must render the OMT mark, docs and roadmap links, GitHub CTA, mobile-friendly navigation, and a locale switcher. `SiteFooter.astro` must render the same public repository links and a short product statement.

- [ ] **Step 4: Validate shell rendering**

  Run `npm run check` and `npm run build`. Expected: no TypeScript or Astro errors; pages can remain minimal until Task 3.

- [ ] **Step 5: Commit visual foundation**

  Run `git add src/styles/global.css src/data/site-content.ts src/components/site src/layouts public/favicon.svg` and commit with `feat: add shared website visual system`.

### Task 3: Build the English landing page

**Files:**
- Create: `src/components/site/ArchitectureFlow.astro`
- Create: `src/components/site/ProtocolStrip.astro`
- Create: `src/components/site/CapabilityGrid.astro`
- Create: `src/components/site/TerminalDemo.astro`
- Create: `src/components/site/ExtensionGrid.astro`
- Create: `src/components/site/PrinciplesSection.astro`
- Create: `src/components/site/RoadmapPreview.astro`
- Create: `src/pages/index.astro`
- Modify: `src/styles/global.css`

**Interfaces:**
- Consumes: `LandingContent`, `LandingLayout`, and shared tokens from Task 2.
- Produces: a complete English homepage at `/` with the approved information architecture.

- [ ] **Step 1: Implement the architecture and protocol visuals**

  `ArchitectureFlow.astro` accepts `nodes: string[]` and renders the five runtime layers with connectors that wrap into a vertical stack on narrow screens. `ProtocolStrip.astro` accepts three `{label, description}` steps and renders the `search`, `describe`, and `run` flow with clear sequential affordances.

- [ ] **Step 2: Implement capability, terminal, extension, principle, and roadmap components**

  Each component accepts only the typed slice of `LandingContent` it displays. Capability and principle cards must be semantic sections with headings. `TerminalDemo.astro` renders the canonical commands in a dark terminal panel with `aria-label="Example commands"`; the copy action may be a progressive enhancement and must not be required for readability.

- [ ] **Step 3: Compose the English homepage**

  Render `LandingLayout` with `landingContent.en`. Use sections in this exact order: hero, architecture, protocol, capabilities, terminal demo, extensions, principles, roadmap preview, final CTA. Use one H1, meaningful section headings, descriptive link text, and external GitHub links with safe `target`/`rel` behavior.

- [ ] **Step 4: Add responsive styling**

  Make the hero readable at mobile widths, collapse grids to one column, keep terminal code horizontally scrollable, and ensure the architecture diagram remains understandable without hover or animation.

- [ ] **Step 5: Verify the English homepage**

  Run `npm run check` and `npm run build`. Start `npm run dev -- --host 127.0.0.1`, open `http://127.0.0.1:4321/`, and inspect desktop and narrow viewport rendering. Expected: no console/build errors, visible focus states, and all primary links work.

- [ ] **Step 6: Commit the English homepage**

  Run `git add src/components/site src/pages/index.astro src/styles/global.css` and commit with `feat: build developer infrastructure landing page`.

### Task 4: Add the Chinese homepage and locale behavior

**Files:**
- Create: `src/pages/zh/index.astro`
- Modify: `src/data/site-content.ts`
- Modify: `src/components/site/SiteHeader.astro`
- Modify: `src/styles/global.css`

**Interfaces:**
- Consumes: the shared landing components and `landingContent.zh` from Tasks 2–3.
- Produces: a complete Chinese homepage at `/zh/` and a locale switcher that preserves translated home-page context.

- [ ] **Step 1: Write natural Chinese product copy**

  Author the Chinese hero, section labels, capability descriptions, principles, commands, extension descriptions, and roadmap labels as native product copy. Keep command names and repository identifiers unchanged.

- [ ] **Step 2: Compose the Chinese page**

  Render the same component order as the English page using `landingContent.zh` and `lang="zh-CN"`. Keep headings semantically parallel while allowing sentence structure to differ naturally.

- [ ] **Step 3: Implement safe locale switching**

  Make the switcher map `/` to `/zh/`, `/zh/` to `/`, `/docs/...` to `/zh/docs/...`, and `/zh/docs/...` to `/docs/...`. When a translated page does not exist, fall back to the locale's home page.

- [ ] **Step 4: Verify bilingual home pages**

  Run `npm run check` and `npm run build`; open both `/` and `/zh/` locally and verify the language, navigation, CTA links, and responsive layout.

- [ ] **Step 5: Commit the Chinese homepage**

  Run `git add src/pages/zh/index.astro src/data/site-content.ts src/components/site/SiteHeader.astro src/styles/global.css` and commit with `feat: add chinese landing page`.

### Task 5: Create bilingual Starlight documentation

**Files:**
- Create: `src/content/docs/en/index.md`
- Create: `src/content/docs/en/getting-started/installation.md`
- Create: `src/content/docs/en/getting-started/first-run.md`
- Create: `src/content/docs/en/concepts/runtime.md`
- Create: `src/content/docs/en/concepts/providers-and-extensions.md`
- Create: `src/content/docs/en/cli/reference.md`
- Create: `src/content/docs/en/extensions/official.md`
- Create: `src/content/docs/zh/index.md`
- Create: `src/content/docs/zh/getting-started/installation.md`
- Create: `src/content/docs/zh/getting-started/first-run.md`
- Create: `src/content/docs/zh/concepts/runtime.md`
- Create: `src/content/docs/zh/concepts/providers-and-extensions.md`
- Create: `src/content/docs/zh/cli/reference.md`
- Create: `src/content/docs/zh/extensions/official.md`
- Create: `src/pages/roadmap.astro`
- Create: `src/pages/zh/roadmap.astro`

**Interfaces:**
- Consumes: Starlight collection and sidebar configuration from Task 1, product facts from the Core README, and locale switching from Task 4.
- Produces: bilingual docs at `/docs/` and `/zh/docs/`, plus roadmap pages at `/roadmap/` and `/zh/roadmap/`.

- [ ] **Step 1: Write English getting-started and concepts docs**

  Document installation from npm, Bun runtime expectations, `ohmytool --version`, the `search → describe → run` flow, runtime/provider/extension boundaries, and policy preflight. Include copyable shell/PowerShell examples and link to Core and official extension repositories.

- [ ] **Step 2: Write English CLI and extension docs**

  Document the canonical commands from the Core README, including `connection`, `config`, `extension`, `setup`, `integrate`, `secret`, and `mcp` commands. Clearly label provider-specific configuration as extension-owned and link MySQL, Redis, and Kafka repositories.

- [ ] **Step 3: Write the Chinese equivalents**

  Translate the user-facing explanation naturally, preserve commands/code blocks exactly, and ensure every English page has the corresponding Chinese page with matching frontmatter slugs where possible.

- [ ] **Step 4: Add roadmap pages**

  Render shipped/in-progress/planned/future labels from the current Core roadmap. Keep deferred capabilities marked as deferred and link the full docs roadmap from both locale pages.

- [ ] **Step 5: Verify docs navigation and locale paths**

  Run `npm run check` and `npm run build`; open `/docs/`, `/zh/docs/`, `/docs/getting-started/installation/`, and `/zh/docs/getting-started/installation/`. Verify sidebar labels, code blocks, search UI, language switching, and valid links.

- [ ] **Step 6: Commit bilingual documentation**

  Run `git add src/content/docs src/pages/roadmap.astro src/pages/zh/roadmap.astro` and commit with `docs: add bilingual product documentation`.

### Task 6: Add GitHub Pages deployment and project handoff docs

**Files:**
- Create: `.github/workflows/deploy.yml`
- Modify: `README.md`

**Interfaces:**
- Consumes: the successful Astro build from Tasks 1–5.
- Produces: a GitHub Actions workflow that publishes `dist/` and local handoff instructions for the website repository.

- [ ] **Step 1: Configure the Pages workflow**

  Create a workflow triggered by pushes to `main` and manual dispatch. Use the official Pages actions to configure Pages, install dependencies with `npm ci`, run `npm run build`, upload `dist/`, and deploy with the required `pages: write`, `id-token: write`, and read permissions.

- [ ] **Step 2: Document local development and Pages setup**

  Update `README.md` with `npm install`, `npm run dev`, `npm run check`, `npm run build`, `npm run preview`, the public URL, and the one-time GitHub repository Pages setting: source must be GitHub Actions.

- [ ] **Step 3: Verify workflow syntax and production build**

  Run `npm run check` and `npm run build`. Inspect the workflow YAML and confirm the generated `dist/` directory contains the English and Chinese entry routes.

- [ ] **Step 4: Commit deployment support**

  Run `git add .github/workflows/deploy.yml README.md` and commit with `ci: deploy website to github pages`.

### Task 7: Run final local visual verification and handoff

**Files:**
- Modify: any implementation file that fails checks or visual inspection.

**Interfaces:**
- Consumes: the complete site from Tasks 1–6.
- Produces: a locally running preview opened for the user, with verified production output and a clean working tree except for any explicitly documented local files.

- [ ] **Step 1: Run the complete checks**

  Run `npm run check` and `npm run build`. Expected: both pass with no errors.

- [ ] **Step 2: Run the production preview**

  Start `npm run preview -- --host 127.0.0.1`, verify `/`, `/zh/`, `/docs/`, `/zh/docs/`, `/roadmap/`, and `/zh/roadmap/`, then keep the preview process available for the user.

- [ ] **Step 3: Open the finished site locally**

  Open `http://127.0.0.1:4321/` in the local browser and show the homepage. Also provide direct paths for `/zh/`, `/docs/`, and `/zh/docs/` so the user can inspect the bilingual experience.

- [ ] **Step 4: Review git status and hand off**

  Run `git status --short --branch` and report the local preview URL, build/check results, key routes, and any GitHub Pages configuration still required.

